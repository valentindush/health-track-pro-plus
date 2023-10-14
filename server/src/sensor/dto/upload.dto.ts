import { IsString, IsNumber, IsDate, IsObject } from 'class-validator';

export class SensorDataDTO {
  @IsString()
  deviceId: string;

  @IsNumber()
  value: number;

  @IsDate()
  timeStamp: Date;

  @IsNumber()
  temperature: number;

  @IsNumber()
  heartBeat: number;
}

export class UploadDataDTO {
  @IsObject()
  heartBeatSensor: SensorDataDTO;

  @IsObject()
  temperatureSensor: SensorDataDTO;
}
