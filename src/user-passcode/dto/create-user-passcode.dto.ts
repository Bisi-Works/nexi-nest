import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { UserExists } from 'src/decorators/user-exists.decorator';

export class CreateUserPasscodeDto {
    @ApiProperty({description: "ID do Usuario", required: true})
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
}
