import { PartialType } from '@nestjs/mapped-types';
import { CreateUserPasscodeDto } from './create-user-passcode.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class UpdateUserPasscodeDto extends PartialType(CreateUserPasscodeDto) {
    @IsNotEmpty({
        message: 'Erro ao gerar segredo do usuario: Empty'
    })
    @IsString({
        message: 'Erro ao gerar segredo do usuario: Type'
    })
    @Length(6, 6, {
        message: 'Erro ao gerar segredo do usuario: Length'
    })
    @IsOptional()
    passcode: string;

    @IsOptional()
    @IsBoolean({
        message: 'Erro ao gerar segredo do usuario: Type'
    })
    used: boolean;
}
