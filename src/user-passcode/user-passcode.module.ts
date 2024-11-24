import { EntityExistenceChecker } from 'src/queries/entity-existence.query';
import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { UserPasscodeService } from './user-passcode.service';
import { UserPasscodeController } from './user-passcode.controller';
import { CompanyExistsConstraint } from 'src/decorators/company-exists.constraint';
import { UserExistsConstraint } from 'src/decorators/user-exists.constraint';

@Module({
  controllers: [UserPasscodeController],
  providers: [PrismaService, UserPasscodeService, UserExistsConstraint, EntityExistenceChecker],
})
export class UserPasscodeModule {}
