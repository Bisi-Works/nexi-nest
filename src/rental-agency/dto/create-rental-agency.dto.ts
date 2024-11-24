import { IsBoolean, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateRentalAgencyDto {

    @IsString({ message: 'O nome precisa ser uma string' })
    name: string;

    @IsString({ message: 'A url do logo precisa ser uma string' })
    @IsUrl({}, { message: 'A url do logo precisa ser válida' })
    @IsOptional()
    logoURL: string;
}
