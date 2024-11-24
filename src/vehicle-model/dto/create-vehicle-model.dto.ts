import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateVehicleModelDto {
  @IsString({ message: 'O nome do modelo deve ser uma string' })
  @IsOptional()
  name: string;

  @IsInt({ message: 'O ID da marca do veículo deve ser um número inteiro' })
  @IsNotEmpty({ message: 'O ID da marca do veículo é obrigatório' })
  vehicleBrandId: number;
}