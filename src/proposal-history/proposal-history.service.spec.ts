import { Test, TestingModule } from '@nestjs/testing';
import { ProposalHistoryService } from './proposal-history.service';

describe('ProposalHistoryService', () => {
  let service: ProposalHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProposalHistoryService],
    }).compile();

    service = module.get<ProposalHistoryService>(ProposalHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
