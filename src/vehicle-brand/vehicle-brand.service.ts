import { Injectable } from '@nestjs/common';
import { CreateVehicleBrandDto } from './dto/create-vehicle-brand.dto';
import { UpdateVehicleBrandDto } from './dto/update-vehicle-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VehicleBrandService {
    constructor(private readonly prisma: PrismaService) {}

    create(createVehicleBrandDto: CreateVehicleBrandDto) {
        return this.prisma.vehicleBrand.create({ data: createVehicleBrandDto });
    }

    findAll() {
        return this.prisma.vehicleBrand.findMany();
    }

    findOne(id: number) {
        return this.prisma.vehicleBrand.findUnique({ where: { id } });
    }

    update(id: number, updateVehicleBrandDto: UpdateVehicleBrandDto) {
        return this.prisma.vehicleBrand.update({
            where: { id },
            data: updateVehicleBrandDto
        });
    }

    remove(id: number) {
        return `This action removes a #${id} vehicleBrand`;
    }
}
