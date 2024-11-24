import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProposalWorkflowService } from './proposal-workflow.service';
import { CreateProposalWorkflowDto } from './dto/create-proposal-workflow.dto';
import { UpdateProposalWorkflowDto } from './dto/update-proposal-workflow.dto';

@Controller('proposal-workflow')
export class ProposalWorkflowController {
  constructor(private readonly proposalWorkflowService: ProposalWorkflowService) {}

  @Post()
  create(@Body() createProposalWorkflowDto: CreateProposalWorkflowDto) {
    return this.proposalWorkflowService.create(createProposalWorkflowDto);
  }

  @Get()
  findAll() {
    return this.proposalWorkflowService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proposalWorkflowService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProposalWorkflowDto: UpdateProposalWorkflowDto) {
    return this.proposalWorkflowService.update(+id, updateProposalWorkflowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proposalWorkflowService.remove(+id);
  }
}
