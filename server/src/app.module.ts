import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorModule } from './sensor/sensor.module';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [SensorModule, DeviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
