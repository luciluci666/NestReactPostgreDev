import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('General')
@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Healthcheck working';
  }
}
