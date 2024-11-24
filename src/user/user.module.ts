import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { RoleExistsConstraint } from 'src/decorators/role-exists.constraint';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyExistsConstraint } from 'src/decorators/company-exists.constraint';
import { EntityExistenceChecker } from 'src/queries/entity-existence.query';

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService, RoleExistsConstraint, CompanyExistsConstraint, EntityExistenceChecker],
})
export class UserModule {}
