import { IsOptional, IsString } from 'class-validator';

export class CreateVehicleBrandDto {
  @IsString({ message: 'O nome da marca deve ser uma string' })
  @IsOptional()
  name: string;
}