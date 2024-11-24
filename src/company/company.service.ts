import { ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EntityExistenceChecker } from 'src/queries/entity-existence.query';

@Injectable()
export class CompanyService {

  constructor(private prisma: PrismaService, private entityExistenceChecker: EntityExistenceChecker) {}

  async create(createCompanyDto: CreateCompanyDto, prisma: PrismaService = this.prisma) {
    const existingCompany = await prisma.company.findUnique({
      where: { cnpj: createCompanyDto.cnpj },
    });

    if (existingCompany) {
      throw new ConflictException('CNPJ já cadastrado');
    }

    return prisma.company.create({
      data: createCompanyDto,
    });
  }

  findAll() {
    return this.prisma.company.findMany();
  }

  findOne(id: number) {
    return this.prisma.company.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {

    if(!await this.entityExistenceChecker.checkEntityExistence({
      entityType: 'company',
      queryBy: 'id',
      queryParams: id,
    })) {
      throw new HttpException('Empresa nao encontrada', HttpStatus.NOT_FOUND);
    }

    return this.prisma.company.update({
      where: {
        id
      },
      data: updateCompanyDto
    })
  }

  async remove(id: number) {

    if(!await this.entityExistenceChecker.checkEntityExistence({
      entityType: 'company',
      queryBy: 'id',
      queryParams: id,
    })) {
      throw new HttpException('Empresa nao encontrada', HttpStatus.NOT_FOUND);
    }

    return this.prisma.company.delete({
      where: {
        id
      }
    })
  }
  
}
