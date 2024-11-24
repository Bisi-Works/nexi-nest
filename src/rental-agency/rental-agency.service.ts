import { Injectable } from '@nestjs/common';
import { CreateRentalAgencyDto } from './dto/create-rental-agency.dto';
import { UpdateRentalAgencyDto } from './dto/update-rental-agency.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RentalAgencyService {
    constructor(private prismaService: PrismaService) {}

    create(createRentalAgencyDto: CreateRentalAgencyDto) {
        return this.prismaService.rentalAgency.create({
            data: createRentalAgencyDto
        });
    }

    findAll() {
        return this.prismaService.rentalAgency.findMany();
    }

    findOne(id: number) {
        return this.prismaService.rentalAgency.findUnique({ where: { id } });
    }

    update(id: number, updateRentalAgencyDto: UpdateRentalAgencyDto) {
        return this.prismaService.rentalAgency.update({
            where: { id },
            data: updateRentalAgencyDto
        });
    }

    remove(id: number) {
        return this.prismaService.rentalAgency.delete({ where: { id } });
    }
}
