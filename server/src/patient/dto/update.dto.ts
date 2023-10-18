import { IsString } from "class-validator";

export class UpdatePatientDTO {
    @IsString()
    name: string;

    @IsString()
    nationalId: string;

    @IsString()
    frequentSickness: string
}