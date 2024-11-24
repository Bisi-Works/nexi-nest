import { Module } from '@nestjs/common';
import { RentalAgencyService } from './rental-agency.service';
import { RentalAgencyController } from './rental-agency.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RentalAgencyController],
  providers: [PrismaService, RentalAgencyService],
})
export class RentalAgencyModule {}
