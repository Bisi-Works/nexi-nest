import { Injectable } from '@nestjs/common';
import { CreateCustomerHistoryDto } from './dto/create-customer-history.dto';
import { UpdateCustomerHistoryDto } from './dto/update-customer-history.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomerHistoryService {

  constructor(private prismaService: PrismaService) {}

  create(createCustomerHistoryDto: CreateCustomerHistoryDto) {
    return this.prismaService.customerHistory.create({data: createCustomerHistoryDto});
  }

  findAll() {
    return this.prismaService.customerHistory.findMany();
  }

  findOne(id: number) {
    return this.prismaService.customerHistory.findUnique({where: {id}});
  }

  update(id: number, updateCustomerHistoryDto: UpdateCustomerHistoryDto) {
    return this.prismaService.customerHistory.update({where: {id}, data: updateCustomerHistoryDto});
  }

  remove(id: number) {
    return this.prismaService.customerHistory.delete({where: {id}});
  }
}
