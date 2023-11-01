import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdatePatientDTO {
    @IsString()
    @ApiProperty()
    name: string;

    @IsString()
    @ApiProperty()
    nationalId: string;

    @IsString()
    @ApiProperty()
    frequentSickness: string
}