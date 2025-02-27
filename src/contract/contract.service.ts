import { Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContractService {

  constructor(private readonly prisma: PrismaService) {}

  create(createContractDto: CreateContractDto) {
    return this.prisma.contract.create({data: createContractDto})
  }

  findAll() {
    return this.prisma.contract.findMany()
  }

  findOne(id: number) {
    return this.prisma.contract.findUnique({where: {id}})
  }

  update(id: number, updateContractDto: UpdateContractDto) {
    return this.prisma.contract.update({where: {id}, data: updateContractDto})
  }

  remove(id: number) {
    return this.prisma.contract.delete({where: {id}})
  }
}
