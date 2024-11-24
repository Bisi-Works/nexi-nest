import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProposalExistsConstraint } from 'src/decorators/proposal-exists.constraint';
import { CustomerExistsConstraint } from 'src/decorators/customer-exists.constraint';

@Module({
  controllers: [ContractController],
  providers: [PrismaService, ProposalExistsConstraint, CustomerExistsConstraint, ContractService],
})
export class ContractModule {}
