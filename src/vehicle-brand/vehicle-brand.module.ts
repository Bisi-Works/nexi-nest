import { Module } from '@nestjs/common';
import { VehicleBrandService } from './vehicle-brand.service';
import { VehicleBrandController } from './vehicle-brand.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [VehicleBrandController],
  providers: [PrismaService, VehicleBrandService],
})
export class VehicleBrandModule {}
