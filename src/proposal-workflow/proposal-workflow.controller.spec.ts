import { Test, TestingModule } from '@nestjs/testing';
import { ProposalWorkflowController } from './proposal-workflow.controller';
import { ProposalWorkflowService } from './proposal-workflow.service';

describe('ProposalWorkflowController', () => {
  let controller: ProposalWorkflowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProposalWorkflowController],
      providers: [ProposalWorkflowService],
    }).compile();

    controller = module.get<ProposalWorkflowController>(ProposalWorkflowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
