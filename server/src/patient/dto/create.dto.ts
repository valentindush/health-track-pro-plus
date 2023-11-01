import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreatePatientDTO {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    nationalId: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    frequentSickness: string
}
