import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { EntityExistenceChecker } from 'src/queries/entity-existence.query';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [CompanyController],
  providers: [
    JwtService,
    PrismaService,
    CompanyService,
    EntityExistenceChecker
  ],
})
export class CompanyModule {}
