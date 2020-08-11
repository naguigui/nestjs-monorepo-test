import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceCommonModule } from 'shared-lib/service-common';

@Module({
  imports: [ServiceCommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
