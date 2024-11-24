import { Injectable } from '@nestjs/common';
import { CreateVehicleModelDto } from './dto/create-vehicle-model.dto';
import { UpdateVehicleModelDto } from './dto/update-vehicle-model.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VehicleModelService {
    constructor(private readonly prisma: PrismaService) {}

    create(createVehicleModelDto: CreateVehicleModelDto) {
        return this.prisma.vehicleModel.create({ data: createVehicleModelDto });
    }

    findAll() {
        return this.prisma.vehicleModel.findMany();
    }

    findOne(id: number) {
        return this.prisma.vehicleModel.findUnique({ where: { id } });
    }

    update(id: number, updateVehicleModelDto: UpdateVehicleModelDto) {
        return this.prisma.vehicleModel.update({
            where: { id },
            data: updateVehicleModelDto
        });
    }

    remove(id: number) {
        return this.prisma.vehicleModel.delete({ where: { id } });
    }
}
