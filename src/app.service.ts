import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Serverless!';
  }

  postHello(text: string): string {
    return text;
  }
}
