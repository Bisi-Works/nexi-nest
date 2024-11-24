import { UserExistsConstraint } from './../decorators/user-exists.constraint';
import { CustomerExistsConstraint } from './../decorators/customer-exists.constraint';
import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { CustomerHistoryService } from './customer-history.service';
import { CustomerHistoryController } from './customer-history.controller';

@Module({
  controllers: [CustomerHistoryController],
  providers: [PrismaService, CustomerExistsConstraint, UserExistsConstraint, CustomerHistoryService],
})
export class CustomerHistoryModule {}
