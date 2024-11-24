import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { VehicleModelService } from './vehicle-model.service';
import { VehicleModelController } from './vehicle-model.controller';

@Module({
  controllers: [VehicleModelController],
  providers: [PrismaService, VehicleModelService],
})
export class VehicleModelModule {}
