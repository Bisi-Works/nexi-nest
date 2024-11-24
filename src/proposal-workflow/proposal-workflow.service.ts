import { Injectable } from '@nestjs/common';
import { CreateProposalWorkflowDto } from './dto/create-proposal-workflow.dto';
import { UpdateProposalWorkflowDto } from './dto/update-proposal-workflow.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProposalWorkflowService {

  constructor(private readonly prisma: PrismaService) {}

  create(createProposalWorkflowDto: CreateProposalWorkflowDto) {
    return this.prisma.proposalWorkflow.create({data: createProposalWorkflowDto})
  }

  findAll() {
    return this.prisma.proposalWorkflow.findMany()
  }

  findOne(id: number) {
    return this.prisma.proposalWorkflow.findUnique({where: {id}})
  }

  update(id: number, updateProposalWorkflowDto: UpdateProposalWorkflowDto) {
    return this.prisma.proposalWorkflow.update({where: {id}, data: updateProposalWorkflowDto})
  }

  remove(id: number) {
    return this.prisma.proposalWorkflow.delete({where: {id}})
  }
}
