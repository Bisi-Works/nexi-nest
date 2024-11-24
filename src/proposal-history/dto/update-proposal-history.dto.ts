import { PartialType } from '@nestjs/swagger';
import { CreateProposalHistoryDto } from './create-proposal-history.dto';

export class UpdateProposalHistoryDto extends PartialType(CreateProposalHistoryDto) {}
