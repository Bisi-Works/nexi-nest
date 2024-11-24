import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Length
} from 'class-validator';
import { UserExists } from 'src/decorators/user-exists.decorator';

export class CreateUserPasscodeInsideApiDto {
    @IsNotEmpty({
        message: 'Erro ao gerar segredo do usuario: Empty'
    })
    @IsString({
        message: 'Erro ao gerar segredo do usuario: Type'
    })
    @Length(6, 6, {
        message: 'Erro ao gerar segredo do usuario: Length'
    })
    passcode: string;

    @UserExists({
        message: 'Esse Usuário não existe no sistema'
    })
    @IsNumber(
        {},
        {
            message: 'O ID do Usuário é inválido'
        }
    )
    @IsNotEmpty({
        message: 'O ID do Usuário deve ser informado'
    })
    userId: number;


    constructor(passcode: string, userId: number) {
        this.passcode = passcode;
        this.userId = userId;
      }
}
