import { PartialType } from '@nestjs/swagger';
import { CreateProposalWorkflowDto } from './create-proposal-workflow.dto';

export class UpdateProposalWorkflowDto extends PartialType(CreateProposalWorkflowDto) {}
