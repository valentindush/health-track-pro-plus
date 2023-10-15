import { IsNumber,} from 'class-validator';

export class SensorDataDTO {
  @IsNumber()
  patientId: number;

  timeStamp: Date;

  @IsNumber()
  temperature: number;

  @IsNumber()
  heartBeat: number;
}
