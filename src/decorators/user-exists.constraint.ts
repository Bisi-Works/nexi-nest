import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';

@ValidatorConstraint({ name: 'UserExists', async: true })
@Injectable()
export class UserExistsConstraint implements ValidatorConstraintInterface {
  constructor(private prisma: PrismaService) {}

  async validate(userId: number, args: ValidationArguments) {

    if (!userId) {
      return false;
    }

    const user = await this.prisma.user.findUnique({
      where: { id: typeof userId === "string" ? parseInt(userId) : userId },
    });
    return !!user;
  }

  defaultMessage(args: ValidationArguments) {
    return 'O Usuario não existe no banco de dados';
  }
}
