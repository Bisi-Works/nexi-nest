import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateContractDto {
  @IsInt({ message: 'O número de meses esperados para o contrato deve ser um número inteiro' })
  @IsOptional()
  expectedContractMonths?: number;

  @IsInt({ message: 'O ID da proposta deve ser um número inteiro' })
  @IsNotEmpty({ message: 'O ID da proposta é obrigatório' })
  proposalId: number;

  @IsInt({ message: 'O ID do cliente deve ser um número inteiro' })
  @IsNotEmpty({ message: 'O ID do cliente é obrigatório' })
  customerId: number;

  @IsInt({ message: 'O ID do usuário deve ser um número inteiro' })
  @IsNotEmpty({ message: 'O ID do usuário é obrigatório' })
  userId: number;
}