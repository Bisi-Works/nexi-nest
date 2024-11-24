import { Injectable } from '@nestjs/common';
import { CreateVehicleOfferDto } from './dto/create-vehicle-offer.dto';
import { UpdateVehicleOfferDto } from './dto/update-vehicle-offer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VehicleOffersService {
    constructor(private readonly prisma: PrismaService) {}

    create(createVehicleOfferDto: CreateVehicleOfferDto) {
        return this.prisma.vehicleOffer.create({ data: createVehicleOfferDto });
    }

    findAll() {
        return this.prisma.vehicleOffer.findMany();
    }

    findOne(id: number) {
        return this.prisma.vehicleOffer.findUnique({ where: { id } });
    }

    update(id: number, updateVehicleOfferDto: UpdateVehicleOfferDto) {
        return this.prisma.vehicleOffer.update({
            where: { id },
            data: updateVehicleOfferDto
        });
    }

    remove(id: number) {
        return this.prisma.vehicleOffer.delete({ where: { id } });
    }
}
