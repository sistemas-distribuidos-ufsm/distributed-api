import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ApiSettingsController')
@Controller('api-settings')
export class ApiSettingsController {
  constructor() {}

  @Get('status')
  async checkStatus(): Promise<string> {
    return 'Ok';
  }
}
