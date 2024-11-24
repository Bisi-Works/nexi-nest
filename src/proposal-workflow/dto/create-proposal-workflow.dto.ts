import { IsInt, IsNotEmpty, IsOptional, IsString, IsJSON } from 'class-validator';
import { ProposalExists } from 'src/decorators/proposal-exists.decorator';
import { UserExists } from 'src/decorators/user-exists.decorator';

export class CreateProposalWorkflowDto {
  @IsString({ message: 'A descrição deve ser uma string' })
  @IsNotEmpty({ message: 'A descrição é obrigatória' })
  description: string;

  @IsString({ message: 'A mensagem deve ser uma string' })
  @IsOptional()
  message?: string;

  @IsJSON({ message: 'O corpo deve ser um JSON válido' })
  @IsOptional()
  body?: any;

  @IsInt({ message: 'O ID da proposta deve ser um número inteiro' })
  @IsNotEmpty({ message: 'O ID da proposta é obrigatório' })
  @ProposalExists({ message: 'A proposta informada não existe' })
  proposalId: number;

  @IsInt({ message: 'O ID do usuário deve ser um número inteiro' })
  @IsNotEmpty({ message: 'O ID do usuário é obrigatório' })
  @UserExists({ message: 'O usuário informado não existe' })
  userId: number;
}