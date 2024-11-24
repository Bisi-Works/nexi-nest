import { Injectable } from '@nestjs/common';
import { CreateHealthIndicationDto } from './dto/create-health-indication.dto';
import { UpdateHealthIndicationDto } from './dto/update-health-indication.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HealthIndicationService {

  constructor(private readonly prisma: PrismaService) {}

  create(createHealthIndicationDto: CreateHealthIndicationDto) {
    return this.prisma.healthIndication.create({data: createHealthIndicationDto});
  }

  findAll() {
    return this.prisma.healthIndication.findMany();
  }

  findOne(id: number) {
    return this.prisma.healthIndication.findUnique({where: {id}});
  }

  update(id: number, updateHealthIndicationDto: UpdateHealthIndicationDto) {
    return this.prisma.healthIndication.update({where: {id}, data: updateHealthIndicationDto});
  }

  remove(id: number) {
    return this.prisma.healthIndication.delete({where: {id}});
  }
}
