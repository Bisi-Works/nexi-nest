import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProposalHistoryService } from './proposal-history.service';
import { CreateProposalHistoryDto } from './dto/create-proposal-history.dto';
import { UpdateProposalHistoryDto } from './dto/update-proposal-history.dto';

@Controller('proposal-history')
export class ProposalHistoryController {
  constructor(private readonly proposalHistoryService: ProposalHistoryService) {}

  @Post()
  create(@Body() createProposalHistoryDto: CreateProposalHistoryDto) {
    return this.proposalHistoryService.create(createProposalHistoryDto);
  }

  @Get()
  findAll() {
    return this.proposalHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proposalHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProposalHistoryDto: UpdateProposalHistoryDto) {
    return this.proposalHistoryService.update(+id, updateProposalHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proposalHistoryService.remove(+id);
  }
}
