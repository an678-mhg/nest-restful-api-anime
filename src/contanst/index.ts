export class AnimeCrawl {
  title: string;
  other_title: string;
  slug: string;
  image_url: string;
  country_name: string;
}

export class AnimeCrawlDetail {
  title: string;
  other_title: string;
  episodes_link_iframe: EpisodesLinkIframe[];
  episodes_link_m3u8: EpisodesLinkM3u8[];
  episodes_count: number;
  status: string;
  episodes: string;
  time: string;
  year: string;
  quality: string;
  language: string;
  director: string;
  actors: string;
  categories: string;
  countries: string;
  image_url: string;
  slug: string;
  description: string;
}

export class EpisodesLinkIframe {
  name: string;
  url: string;
}

export class EpisodesLinkM3u8 {
  name: string;
  url: string;
}
