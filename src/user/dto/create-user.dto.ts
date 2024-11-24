import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    Length
} from 'class-validator';
import { CompanyExists } from '../../decorators/company-exists.decorator';
import { RoleExists } from '../../decorators/role-exists.decorator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({description: "Nome completo do usuario", required: true})
    @IsNotEmpty({ message: 'O nome deve ser informado' })
    @IsString({ message: 'O nome deve ser uma string' })
    @Length(3, 100, { message: 'O nome deve ter entre 3 e 100 caracteres' })
    fullName: string;

    @ApiProperty({description: "Email do usuario", required: true})
    @IsNotEmpty({ message: 'O email deve ser informado' })
    @IsEmail({}, { message: 'O email deve ser um email válido' })
    email: string;

    @ApiProperty({description: "ID do cargo do usuario", required: true})
    @IsNotEmpty({ message: 'O cargo deve ser informado' })
    @IsNumber({}, { message: 'O cargo deve ser um número (ID)'})
    @RoleExists({ message: 'O cargo informado não existe' })
    roleId: number;

    @ApiProperty({description: "ID da empresa que o usuario está associado", required: true})
    @IsNotEmpty({ message: 'A empresa deve ser informada' })
    @IsNumber({}, { message: 'A empresa deve ser um número (ID)' })
    @CompanyExists({ message: 'A empresa informada não existe' })
    companyId: number;
}
