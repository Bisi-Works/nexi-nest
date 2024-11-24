import { Test, TestingModule } from '@nestjs/testing';
import { CustomerHistoryService } from './customer-history.service';

describe('CustomerHistoryService', () => {
  let service: CustomerHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerHistoryService],
    }).compile();

    service = module.get<CustomerHistoryService>(CustomerHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
