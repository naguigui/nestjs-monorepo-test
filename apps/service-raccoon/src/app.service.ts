import { Injectable } from '@nestjs/common';
import { SOME_CONSTANT } from 'shared-lib/service-common';

@Injectable()
export class AppService {
  getConstant(): string {
    return SOME_CONSTANT;
  }
}
