import { IsInt, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateVehicleVersionDto {
  @IsString({ message: 'O nome da versão deve ser uma string' })
  @IsNotEmpty({ message: 'O nome da versão é obrigatório' })
  name: string;

  @IsString({ message: 'O ano deve ser uma string' })
  @IsOptional()
  year?: string;

  @IsUrl({}, { message: 'A URL da imagem deve ser uma URL válida' })
  @IsOptional()
  imageURL?: string;

  @IsInt({ message: 'O ID do modelo do veículo deve ser um número inteiro' })
  @IsNotEmpty({ message: 'O ID do modelo do veículo é obrigatório' })
  vehicleModelId: number;
}