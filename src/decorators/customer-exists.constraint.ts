import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';

@ValidatorConstraint({ name: 'CustomerExists', async: true })
@Injectable()
export class CustomerExistsConstraint implements ValidatorConstraintInterface {
  constructor(private prisma: PrismaService) {}

  async validate(customerId: number, args: ValidationArguments) {

    if (!customerId) {
      return false;
    }

    const customer = await this.prisma.customer.findUnique({
      where: { id: typeof customerId === "string" ? parseInt(customerId) : customerId },
    });
    return !!customer;
  }

  defaultMessage(args: ValidationArguments) {
    return 'O Cliente com o ID ($value) não existe no banco de dados';
  }
}
