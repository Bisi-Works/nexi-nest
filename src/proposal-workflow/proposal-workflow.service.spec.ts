import { Test, TestingModule } from '@nestjs/testing';
import { ProposalWorkflowService } from './proposal-workflow.service';

describe('ProposalWorkflowService', () => {
  let service: ProposalWorkflowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProposalWorkflowService],
    }).compile();

    service = module.get<ProposalWorkflowService>(ProposalWorkflowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
