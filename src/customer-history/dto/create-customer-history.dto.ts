import { IsJSON, IsNumber, IsOptional, IsString } from 'class-validator';
import { CustomerExists } from 'src/decorators/customer-exists.decorator';
import { UserExists } from 'src/decorators/user-exists.decorator';

export class CreateCustomerHistoryDto {
    @IsString({ message: 'A descrição deve ser uma string' })
    description: string;

    @IsString({ message: 'O body deve ser uma string' })
    @IsJSON({ message: 'O body deve ser um JSON' })
    body: string;

    @CustomerExists({ message: 'O Cliente não existe no banco de dados' })
    @IsNumber({}, { message: 'O ID do Cliente deve ser um número' })
    customerId: number;

    @UserExists({ message: 'O Usuário não existe no banco de dados' })
    @IsNumber({}, { message: 'O ID do Usuário deve ser um número' })
    userId: number;
}
