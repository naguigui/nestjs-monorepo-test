import { Module } from '@nestjs/common';
import { ServiceCommonService } from './service-common.service';

@Module({
  providers: [ServiceCommonService],
  exports: [ServiceCommonService],
})
export class ServiceCommonModule {}
