import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RequestService {
  request() {
    const client = axios.create({
      baseURL: process.env.BASE_CRAWL_URL,
    });

    return client;
  }
}
