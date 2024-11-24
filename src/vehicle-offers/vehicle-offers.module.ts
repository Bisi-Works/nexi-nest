import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { VehicleOffersService } from './vehicle-offers.service';
import { VehicleOffersController } from './vehicle-offers.controller';

@Module({
  controllers: [VehicleOffersController],
  providers: [PrismaService, VehicleOffersService],
})
export class VehicleOffersModule {}
