import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get("get/:id")
  getReadingsBydDevice(@Param("id") id:number){
    return this.sensorService.getReadingsBydDevice(id)
  }
}
