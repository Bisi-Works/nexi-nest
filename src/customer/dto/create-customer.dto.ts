import { PersonType } from '@prisma/client';
import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, IsUrl, Length } from 'class-validator';
import { CompanyExists } from 'src/decorators/company-exists.decorator';
import { IsCEP } from 'src/decorators/is-cep.decorator';
import { IsCNPJ } from 'src/decorators/is-cnpj.decorator';
import { IsCPF } from 'src/decorators/is-cpf.decorator';
import { IsRG } from 'src/decorators/is-rg.decorator';
import { UserExists } from 'src/decorators/user-exists.decorator';

export class CreateCustomerDto {
    @IsEnum(PersonType, {
        message: 'O tipo de pessoa deve ser PF, PJ ou PF_PJ',
    })
    @IsNotEmpty({ message: 'O tipo de pessoa deve ser informado' })
    personType: PersonType;

    @IsString({ message: 'O nome deve ser uma string' })
    @IsOptional()
    fullName?: string;

    @IsString({ message: 'O nome da mãe deve ser uma string' })
    @IsOptional()
    motherName?: string;

    @IsString({ message: 'O RG deve ser uma string' })
    @IsRG({ message: 'O RG informado é inválido' })
    @IsOptional()
    rg?: string;

    @IsString({ message: 'O CPF deve ser uma string' })
    @IsCPF({ message: 'O CPF informado é inválido' })
    @IsOptional()
    cpf?: string;

    @IsString({ message: 'O CNPJ deve ser uma string' })
    @IsCNPJ({ message: 'O CNPJ informado é inválido' })
    @IsOptional()
    cnpj?: string;

    @IsDate({ message: 'A data de nascimento deve ser uma data' })
    @IsOptional()
    birthdayDate?: Date;

    @IsEmail({}, { message: 'O email deve ser um email válido' })
    @IsOptional()
    email?: string;

    @IsCEP({ message: 'O CEP deve ser um CEP válido' })
    @IsOptional()
    cep?: string;

    @IsString({ message: 'A UF deve ser uma string' })
    @Length(2, 2, { message: 'A UF deve ter 2 caracteres' })
    @IsOptional()
    uf?: string;

    @IsString({ message: 'A Cidade deve ser uma string' })
    @IsOptional()
    city?: string;

    @IsString({ message: 'O Endereço deve ser uma string' })
    @IsOptional()
    address?: string;

    @IsString({ message: 'O Número do endereço deve ser uma string' })
    @IsOptional()
    addressNumber?: string;

    @IsString({ message: 'O Complemento do endereço deve ser uma string' })
    @IsOptional()
    addressComplement?: string;

    @IsPhoneNumber("BR", { message: 'O celular deve ser um telefone brasileiro' })
    @IsOptional()
    phone?: string;

    @IsPhoneNumber("BR", { message: 'O telefone deve ser um telefone brasileiro' })
    @IsOptional()
    homePhone?: string;

    @IsNumber({}, { message: 'A renda deve ser um número' })
    @IsOptional()
    earnings?: number;

    @IsString({ message: 'O estado civil deve ser uma string' })
    @IsOptional()
    maritalStatus?: string;

    @IsString({ message: "A profissão deve ser uma string" })
    @IsOptional()
    jobTitle?: string;

    @IsString({ message: 'O local de trabalho deve ser uma string' })
    @IsOptional()
    workplace?: string;

    @IsString({ message: "O tempo na empresa deve ser uma string" })
    @IsOptional()
    companyTime?: string;

    @IsString({ message: "A nacionalidade deve ser uma string" })
    @IsOptional()
    nationality?: string;

    @IsString({ message: "A categoria da CNH deve ser uma string" })
    @IsOptional()
    cnhCategory?: string;

    @IsDate({ message: 'A data de validade da CNH deve ser uma data' })
    @IsOptional()
    cnhValidity?: Date;

    @IsString({ message: "O Genero deve ser uma string" })
    @IsOptional()
    gender?: string;

    @IsDate({ message: "A data de inicio da atividade da empresa deve ser uma data" })
    @IsOptional() 
    companyActivityStartDate?: Date;

    @IsDate({ message: "A data da primeira CNH deve ser uma data" })
    @IsOptional() 
    firstCNHDate?: Date;

    @IsString({ message: "O tipo de trabalho deve ser uma string" })
    @IsOptional()
    jobType?: string;

    @IsString({ message: "A razão social deve ser uma string" })
    @IsOptional()
    companyName?: string;

    @IsString({ message: "O nome fantasia deve ser uma string" })
    @IsOptional()
    fantasyName?: string;

    @IsCNPJ({ message: "O CNPJ deve ser um CNPJ válido" })
    @IsOptional()
    companyCNPJ?: string;

    @IsCEP({ message: "O CEP da Empresa deve ser um CEP válido" })
    @IsOptional()
    companyCep?: string;

    @IsString({ message: "A UF da Empresa deve ser uma string" })
    @Length(2, 2, { message: "A UF da Empresa deve ter 2 caracteres" })
    @IsOptional()
    companyUF?: string;

    @IsString({ message: "A Cidade da Empresa deve ser uma string" })
    @IsOptional()
    companyCity?: string;

    @IsString({ message: "O Endereço da Empresa deve ser uma string" })
    @IsOptional()
    companyAddress?: string;

    @IsString({ message: "O Número do Endereço da Empresa deve ser uma string" })
    @IsOptional()
    companyAddressNumber?: string;

    @IsString({ message: "O Complemento do Endereço da Empresa deve ser uma string" })
    @IsOptional()
    companyAddressComplement?: string;

    @IsPhoneNumber("BR", { message: "O Celular da Empresa deve ser um telefone brasileiro" })
    @IsOptional()
    companyPhone?: string;

    @IsEmail({}, { message: "O Email da Empresa deve ser um email válido" })
    @IsOptional()
    companyEmail?: string;

    @IsString({ message: "O Tipo da Empresa deve ser uma string" })
    @IsOptional()
    companyType?: string;

    @IsString({ message: "O Numero do Contato Financeiro deve ser uma string" })
    @IsOptional()
    financialContactNumber?: string;

    @IsEmail({}, { message: "O Email do Contato Financeiro deve ser um email válido" })
    @IsOptional()
    financialContactEmail?: string;

    @IsString({ message: "O Nome do Contato Financeiro deve ser uma string" })
    @IsOptional()
    financialContactName?: string;

    @IsNumber({}, { message: 'O ID do Usuário é inválido' })
    @IsNotEmpty({ message: 'O ID do Usuário deve ser informado' })
    @UserExists({ message: 'Esse Usuário não existe no sistema' })
    userId: number;
    
    @IsNumber({}, { message: 'O ID da Empresa é inválido' })
    @IsNotEmpty({ message: 'O ID da Empresa deve ser informado' })
    @CompanyExists({ message: 'A empresa informada não existe' })
    companyId: number;

    @IsString({ message: "O Link do Arquivo: Carteira de Habilitação deve ser uma string" })
    @IsUrl({}, { message: "O Link do Arquivo: Carteira de Habilitação deve ser uma URL" })
    @IsOptional()
    drivingLicenseURL?: string;

    @IsString({ message: "O Link do Arquivo: Selfie deve ser uma string" })
    @IsUrl({}, { message: "O Link do Arquivo: Selfie deve ser uma URL" })
    @IsOptional()
    selfieURL?: string;

    @IsString({ message: "O Link do Arquivo: Contrato Social deve ser uma string" })
    @IsUrl({}, { message: "O Link do Arquivo: Contrato Social deve ser uma URL" })
    @IsOptional()
    socialContractURL?: string;
}
