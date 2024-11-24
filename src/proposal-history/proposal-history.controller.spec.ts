import { Test, TestingModule } from '@nestjs/testing';
import { ProposalHistoryController } from './proposal-history.controller';
import { ProposalHistoryService } from './proposal-history.service';

describe('ProposalHistoryController', () => {
  let controller: ProposalHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProposalHistoryController],
      providers: [ProposalHistoryService],
    }).compile();

    controller = module.get<ProposalHistoryController>(ProposalHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
