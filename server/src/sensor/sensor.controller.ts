import { Body, Controller, Post } from '@nestjs/common';
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

  @Post("sensor-register")
  register(@Body() data: RegisterDTO) {
    return this.sensorService.register(data);
  }

}
