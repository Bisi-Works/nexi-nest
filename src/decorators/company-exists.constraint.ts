import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';

@ValidatorConstraint({ name: 'CompanyExists', async: true })
@Injectable()
export class CompanyExistsConstraint implements ValidatorConstraintInterface {
  constructor(private prisma: PrismaService) {}

  async validate(companyId: number, args: ValidationArguments) {

    if (!companyId) {
      return false;
    }

    const company = await this.prisma.company.findUnique({
      where: { id: typeof companyId === "string" ? parseInt(companyId) : companyId },
    });
    return !!company;
  }

  defaultMessage(args: ValidationArguments) {
    return 'A empresa com o ID ($value) não existe no banco de dados';
  }
}
