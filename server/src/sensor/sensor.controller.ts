import { Body, Controller, Get, Post } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { SensorDataDTO } from './dto/upload.dto';
import { RegisterDTO } from './dto/register.dto';

@Controller('sensor')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @Post("upload-data")
  upload(@Body() data: SensorDataDTO) {
    return this.sensorService.upload(data);
  }
}
