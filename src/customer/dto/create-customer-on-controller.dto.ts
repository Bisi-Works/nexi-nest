import { PersonType } from '@prisma/client';
import { IsDate, IsEmail, IsEnum, IsJSON, IsMimeType, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, Length } from 'class-validator';
import { CompanyExists } from 'src/decorators/company-exists.decorator';
import { IsCEP } from 'src/decorators/is-cep.decorator';
import { IsCNPJ } from 'src/decorators/is-cnpj.decorator';
import { IsCPF } from 'src/decorators/is-cpf.decorator';
import { IsRG } from 'src/decorators/is-rg.decorator';
import { UserExists } from 'src/decorators/user-exists.decorator';

export class CreateCustomerOnControllerDto {

    @IsJSON()
    data: string;

    @IsOptional()
    files: File[];

}
