import { IsNotEmpty, IsString } from "class-validator"

export class CreatePatientDTO {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    nationalId: string
}
