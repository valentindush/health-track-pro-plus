import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorModule } from './sensor/sensor.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [SensorModule, PatientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
