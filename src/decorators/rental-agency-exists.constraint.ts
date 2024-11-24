import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';

@ValidatorConstraint({ name: 'RentalAgencyExists', async: true })
@Injectable()
export class RentalAgencyExistsConstraint implements ValidatorConstraintInterface {
  constructor(private prisma: PrismaService) {}

  async validate(rentalAgencyId: number, args: ValidationArguments) {

    if (!rentalAgencyId) {
      return false;
    }

    const rentalAgency = await this.prisma.rentalAgency.findUnique({
      where: { id: typeof rentalAgencyId === "string" ? parseInt(rentalAgencyId) : rentalAgencyId },
    });
    return !!rentalAgency;
  }

  defaultMessage(args: ValidationArguments) {
    return 'A Locadora com o ID ($value) não existe no banco de dados';
  }
}
