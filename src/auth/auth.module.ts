import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { EntityExistenceChecker } from 'src/queries/entity-existence.query';
import { UserPasscodeService } from 'src/user-passcode/user-passcode.service';
import { CompanyService } from 'src/company/company.service';
import { RoleService } from 'src/role/role.service';

@Module({
  providers: [AuthService, UserService, CompanyService, RoleService, UserPasscodeService, JwtService, PrismaService, EntityExistenceChecker],
  controllers: [AuthController]
})
export class AuthModule {}
