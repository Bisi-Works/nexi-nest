import {
    IsArray,
    IsJSON,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Length
} from 'class-validator';
import { CompanyExists } from '../../decorators/company-exists.decorator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
    @ApiProperty({description: "Nome do cargo", required: true})
    @IsString({
        message: 'O nome do cargo deve ser uma string'
    })
    @Length(3, 100, {
        message: 'O nome do cargo deve ter entre 3 e 100 caracteres'
    })
    @IsNotEmpty({
        message: 'O nome do cargo deve ser informado'
    })
    name: string;

    @ApiProperty({description: "Permissões do cargo", required: true})
    @IsJSON()
    permissions: JSON;

    
    @ApiProperty({description: "ID da empresa", required: true})
    @IsNumber()
    @IsNotEmpty({
        message: 'O id da empresa deve ser informado'
    })
    @CompanyExists({ message: 'A empresa com o ID fornecido não existe' })
    companyId: number;

    @ApiProperty({description: "ID dos usuarios associados ao cargo", required: true})
    @IsArray({
        message: 'A lista de usuários deve ser um array de IDs',
    })
    @IsNumber({}, { each: true, message: 'Cada usuário deve ser um número (ID)' })
    @IsOptional()
    usersIds?: number[];
}
