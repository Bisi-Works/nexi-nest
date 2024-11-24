import { IsInt, IsJSON, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ProposalExists } from 'src/decorators/proposal-exists.decorator';
import { UserExists } from 'src/decorators/user-exists.decorator';

export class CreateProposalHistoryDto {
    @IsString({ message: 'A descrição precisa ser uma string' })
    @IsNotEmpty({ message: 'A descrição é obrigatório' })
    description: string;

    @IsString({ message: 'O body precisa ser uma string' })
    @IsJSON({ message: 'O body precisa ser um JSON' })
    @IsNotEmpty({ message: 'O body é obrigatório' })
    @IsOptional()
    body: string;

    @IsInt({ message: 'O ID da proposta precisa ser um inteiro' })
    @IsNotEmpty({ message: 'O ID da proposta é obrigatório' })
    @ProposalExists({ message: 'A proposta informada não existe' })
    proposalId: number;

    @IsInt({ message: 'O ID do usuario precisa ser um inteiro' })
    @IsNotEmpty({ message: 'O ID da usuario é obrigatório' })
    @UserExists({ message: 'O usuario informado não existe' })
    userId: number;
}
