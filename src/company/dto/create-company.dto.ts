import { ApiProperty } from "@nestjs/swagger";
import { IsIdentityCard, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUrl, Length } from "class-validator";
import { IsCNPJ } from "src/decorators/is-cnpj.decorator";

export class CreateCompanyDto {
    
    @ApiProperty({description: "URL da logo da empresa", required: false})
    @IsOptional()
    @IsUrl()
    logoUrl: string;

    @ApiProperty({description: "Razão social da empresa", required: true})
    @IsString({
        message: 'A Razão Social deve ser uma string',
    })
    @Length(3, 100, {
        message: 'A Razão Social deve ter entre 3 e 100 caracteres',
    })
    @IsNotEmpty({
        message: 'A Razão Social deve ser informada',
    })
    companyName: string;

    @ApiProperty({description: "Nome fantasia da empresa", required: true})
    @IsOptional()
    @IsString({
        message: 'O Nome Fantasia deve ser uma string',
    })
    @Length(3, 100, {
        message: 'O Nome Fantasia deve ter entre 3 e 100 caracteres',
    })
    fantasyName: string;

    @ApiProperty({description: "CNPJ da empresa", required: true})
    @IsCNPJ({
        message: 'O CNPJ deve ser um CNPJ válido',
    })
    @IsNotEmpty({
        message: 'O CNPJ deve ser informado',
    })
    cnpj: string;

    @ApiProperty({description: "Telefone da empresa", required: true})
    @IsPhoneNumber('BR', {
        message: 'O Telefone deve ser um telefone válido',
    })
    @IsNotEmpty({
        message: 'O Telefone deve ser informado',
    })
    phone: string;
}
