import { Injectable } from '@nestjs/common';

// interface between database and controller
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
