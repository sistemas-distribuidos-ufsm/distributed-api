import { Module } from '@nestjs/common';
import { ApiSettingsController } from './api-settings.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [ApiSettingsController],
})
export class ApiSettingsModule {}
