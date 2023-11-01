import { ApiProperty } from '@nestjs/swagger';
import { IsNumber,} from 'class-validator';

export class SensorDataDTO {
  @IsNumber()
  @ApiProperty()
  patientId: number;

  @ApiProperty()
  timeStamp: Date;

  @IsNumber()
  @ApiProperty()
  temperature: number;

  @IsNumber()
  @ApiProperty()
  heartBeat: number;
}
