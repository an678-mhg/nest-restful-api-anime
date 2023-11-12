import { ConflictException, Injectable } from '@nestjs/common';
import { RequestService } from 'src/request/request.service';
import { parse } from 'node-html-parser';
import { AnimeCrawl, AnimeCrawlDetail } from '../contanst';

@Injectable()
export class CrawlService {
  prefix_slug = process.env.PREFIX_SLUG as string;
  prefix_image = process.env.PREFIX_IMAGE as string;

  constructor(private requestService: RequestService) {}

  async crawlAnime(page: number): Promise<AnimeCrawl[]> {
    const response = await this.requestService
      .request()
      .get(`/tim-kiem?keyword=sky+x+family`);

    if (!response?.data) throw ConflictException;

    const root = parse(response?.data);
    const allTrs = root.querySelectorAll('table tr');

    // @ts-ignore
    return allTrs
      ?.filter((_, index) => index > 0)
      ?.map((item) => {
        const title = parse(item.textContent).querySelector('img');

        return {
          title: title?.getAttribute('alt')?.split(' - ')[0],
          other_title: title?.getAttribute('alt').split(' - ')[1],
          slug: item
            .querySelector('td a')
            .getAttribute('href')
            ?.split(this.prefix_slug)?.[1],
          image_url: decodeURIComponent(
            title
              .getAttribute('srcSet')
              ?.split(',')?.[0]
              ?.split(this.prefix_image)?.[1]
              ?.split('&')[0],
          ),
          country_name: item.querySelectorAll('td')?.[4]?.textContent,
        };
      });
  }

  async crawlAnimeDetail(slug: string): Promise<AnimeCrawlDetail> {
    const response = await this.requestService.request().get(`/phim/${slug}`);

    if (!response?.data) throw ConflictException;

    const root = parse(response?.data);

    const table_content = root.querySelectorAll('table tbody tr');
    const title = root.querySelector('h1')?.textContent;
    const other_title = root.querySelector('h2')?.textContent;
    const description = root.querySelector('article p')?.textContent;
    const episodes_link = root.querySelectorAll('textarea');
    const image_url_list = root.querySelectorAll('div span img');

    const keys = [
      'status',
      'episodes',
      'time',
      'year',
      'quality',
      'language',
      'director',
      'actors',
      'categories',
      'countries',
    ];

    const data = table_content?.reduce((final, item, index) => {
      final[keys[index]] = item?.querySelectorAll('td')?.[1]?.textContent;
      return final;
    }, {} as any);

    return {
      title,
      other_title,
      description,
      ...episodes_link?.reduce((final, item) => {
        const first_link = item?.textContent?.split('\n')?.[0]?.split('.');

        final[
          `episodes_link_${
            first_link?.[first_link?.length - 1] === 'm3u8' ? 'm3u8' : 'iframe'
          }`
        ] = item?.textContent?.split('\n')?.map((item) => ({
          name: item?.split('|')[0],
          url: item?.split('|')[1],
        }));
        return final;
      }, {} as any),
      episodes_count: episodes_link?.[0]?.textContent?.split('\n').length,
      image_url: decodeURIComponent(
        image_url_list
          ?.filter(
            (item) => item?.getAttribute('src')?.startsWith(this.prefix_image),
          )?.[0]
          ?.getAttribute('src')
          ?.split(this.prefix_image)?.[1]
          ?.split('&')?.[0] || '',
      ),
      slug,
      ...data,
    };
  }

  async crawlMetadata() {
    const response = await this.requestService
      ?.request()
      ?.get('/danh-sach/hoat-hinh');

    if (!response?.data) throw ConflictException;

    const root = parse(response?.data);

    const allSelect = root?.querySelectorAll('select');

    const keys = ['time', 'type', 'categories', 'countries', 'year'];

    return allSelect?.reduce((final, item, index) => {
      final[keys[index]] = item?.querySelectorAll('option')?.map((item) => ({
        value: item?.getAttribute('value'),
        label: item?.textContent,
      }));

      return final;
    }, {} as any);
  }
}
