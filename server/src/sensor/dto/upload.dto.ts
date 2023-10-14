import { IsString, IsNumber, IsDate, IsObject } from 'class-validator';

export class SensorDataDTO {
  @IsString()
  deviceId: string;

  timeStamp: Date;

  @IsNumber()
  temperature: number;

  @IsNumber()
  heartBeat: number;
}
