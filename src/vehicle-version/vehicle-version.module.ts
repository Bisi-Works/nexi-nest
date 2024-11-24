import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { VehicleVersionService } from './vehicle-version.service';
import { VehicleVersionController } from './vehicle-version.controller';

@Module({
  controllers: [VehicleVersionController],
  providers: [PrismaService, VehicleVersionService],
})
export class VehicleVersionModule {}
