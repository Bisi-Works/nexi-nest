import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyExistsConstraint } from '../decorators/company-exists.constraint';
import { EntityExistenceChecker } from 'src/queries/entity-existence.query';

@Module({
    controllers: [RoleController],
    providers: [PrismaService, RoleService, CompanyExistsConstraint, EntityExistenceChecker]
})
export class RoleModule {}
