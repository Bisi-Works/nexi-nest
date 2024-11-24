import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ProposalHistoryService } from './proposal-history.service';
import { ProposalHistoryController } from './proposal-history.controller';
import { ProposalExistsConstraint } from 'src/decorators/proposal-exists.constraint';
import { UserExistsConstraint } from 'src/decorators/user-exists.constraint';

@Module({
  controllers: [ProposalHistoryController],
  providers: [PrismaService, ProposalExistsConstraint, UserExistsConstraint, ProposalHistoryService],
})
export class ProposalHistoryModule {}
