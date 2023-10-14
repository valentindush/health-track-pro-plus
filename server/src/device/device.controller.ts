import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DeviceService } from './device.service';
import { RegisterDTO } from './dto/register.dto';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post("register")
  register(@Body() data: RegisterDTO) {
    return this.deviceService.register(data);
  }

  @Get("get-all")
  getDevices(){
    return this.deviceService.getDevices()
  }

  @Get("get/:id")
  geById(@Param("id") id: number){
    return this.deviceService.getById(id)
  }

  @Delete("delete/:id")
  deleteById(@Param("id") id: number){
    return this.deviceService.deleteById(id)
  }

}
