import { IsDecimal, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PersonType } from '@prisma/client';

export class CreateVehicleOfferDto {
  @IsString({ message: 'O tempo de contrato deve ser uma string' })
  @IsOptional()
  term?: string;

  @IsString({ message: 'O pacote de KM deve ser uma string' })
  @IsOptional()
  km?: string;

  @IsEnum(PersonType, { message: 'O tipo de pessoa deve ser PF, PJ ou PF_PJ' })
  @IsNotEmpty({ message: 'O tipo de pessoa é obrigatório' })
  personType: PersonType;

  @IsDecimal({ decimal_digits: '2', force_decimal: true }, { message: 'O preço deve ser um número decimal' })
  @IsOptional()
  price?: number;

  @IsDecimal({ decimal_digits: '2', force_decimal: true }, { message: 'O preço com desconto deve ser um número decimal' })
  @IsOptional()
  discountedPrice?: number;

  @IsInt({ message: 'O ID da agência de aluguel deve ser um número inteiro' })
  @IsNotEmpty({ message: 'O ID da agência de aluguel é obrigatório' })
  rentalAgencyId: number;

  @IsInt({ message: 'O ID da versão do veículo deve ser um número inteiro' })
  @IsNotEmpty({ message: 'O ID da versão do veículo é obrigatório' })
  vehicleVersionId: number;
}