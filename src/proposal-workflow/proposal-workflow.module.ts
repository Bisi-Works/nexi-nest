import { Module } from '@nestjs/common';
import { ProposalWorkflowService } from './proposal-workflow.service';
import { ProposalWorkflowController } from './proposal-workflow.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserExistsConstraint } from 'src/decorators/user-exists.constraint';
import { ProposalExistsConstraint } from 'src/decorators/proposal-exists.constraint';

@Module({
  controllers: [ProposalWorkflowController],
  providers: [PrismaService, UserExistsConstraint, ProposalExistsConstraint, ProposalWorkflowService],
})
export class ProposalWorkflowModule {}
