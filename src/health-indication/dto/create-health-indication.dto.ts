import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserExists } from 'src/decorators/user-exists.decorator';

export class CreateHealthIndicationDto {
  @IsString({ message: 'O nome completo deve ser uma string' })
  @IsNotEmpty({ message: 'O nome completo é obrigatório' })
  fullName: string;

  @IsString({ message: 'O telefone deve ser uma string' })
  @IsNotEmpty({ message: 'O telefone é obrigatório' })
  phone: string;

  @IsString({ message: 'O CNPJ para cotação deve ser uma string' })
  @IsOptional()
  quotationForCnpj?: string;

  @IsString({ message: 'As idades e relacionamento devem ser uma string' })
  @IsOptional()
  agesAndRelationship?: string;

  @IsString({ message: 'A região de serviço deve ser uma string' })
  @IsOptional()
  serviceRegion?: string;

  @IsString({ message: 'A informação sobre plano de saúde deve ser uma string' })
  @IsOptional()
  hasHealthPlan?: string;

  @IsString({ message: 'O nome do plano atual deve ser uma string' })
  @IsOptional()
  currentPlanName?: string;

  @IsString({ message: 'O custo mensal do plano atual deve ser uma string' })
  @IsOptional()
  currentPlanMonthlyCost?: string;

  @IsString({ message: 'O nível do plano deve ser uma string' })
  @IsOptional()
  planLevel?: string;

  @IsString({ message: 'A informação sobre apartamento ou enfermaria deve ser uma string' })
  @IsOptional()
  wardApartmentHasCopar?: string;

  @IsString({ message: 'O status deve ser uma string' })
  @IsOptional()
  status_rd?: string;

  @IsInt({ message: 'O ID do usuário deve ser um número inteiro' })
  @IsNotEmpty({ message: 'O ID do usuário é obrigatório' })
  @UserExists({ message: 'O usuário informado não existe' })
  userId: number;
}