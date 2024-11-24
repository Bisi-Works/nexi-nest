import { Injectable } from '@nestjs/common';
import { CreateVehicleVersionDto } from './dto/create-vehicle-version.dto';
import { UpdateVehicleVersionDto } from './dto/update-vehicle-version.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VehicleVersionService {
    constructor(private readonly prisma: PrismaService) {}

    create(createVehicleVersionDto: CreateVehicleVersionDto) {
        return this.prisma.vehicleVersion.create({
            data: createVehicleVersionDto
        });
    }

    findAll() {
        return this.prisma.vehicleVersion.findMany();
    }

    findOne(id: number) {
        return this.prisma.vehicleVersion.findUnique({ where: { id } });
    }

    update(id: number, updateVehicleVersionDto: UpdateVehicleVersionDto) {
        return this.prisma.vehicleVersion.update({
            where: { id },
            data: updateVehicleVersionDto
        });
    }

    remove(id: number) {
        return this.prisma.vehicleVersion.delete({ where: { id } });
    }
}
