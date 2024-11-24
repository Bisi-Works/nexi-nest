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
import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UserFirstAccessDto extends PartialType(CreateUserDto) {
    @ApiProperty({description: "Nome completo do usuario", required: true})
    @IsNotEmpty({ message: 'O nome deve ser informado' })
    @IsString({ message: 'O nome deve ser uma string' })
    @Length(3, 100, { message: 'O nome deve ter entre 3 e 100 caracteres' })
    fullName: string;

    @ApiProperty({description: "Email do usuario", required: true})
    @IsNotEmpty({ message: 'O email deve ser informado' })
    @IsEmail({}, { message: 'O email deve ser um email válido' })
    email: string;
}
