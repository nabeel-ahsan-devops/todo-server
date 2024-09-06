import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nest on Vercel ' + process.env.MONGODB_URL;
  }
}
