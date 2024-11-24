import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';

@ValidatorConstraint({ name: 'RoleExists', async: true })
@Injectable()
export class RoleExistsConstraint implements ValidatorConstraintInterface {
  constructor(private prisma: PrismaService) {}

  async validate(roleId: number, args: ValidationArguments) {

    if (!roleId) {
      return false;
    }

    const role = await this.prisma.role.findUnique({
      where: { id: typeof roleId === "string" ? parseInt(roleId) : roleId },
    });
    return !!role;
  }

  defaultMessage(args: ValidationArguments) {
    return 'A função com o ID ($value) não existe no banco de dados';
  }
}
