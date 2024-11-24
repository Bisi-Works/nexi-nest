import { Test, TestingModule } from '@nestjs/testing';
import { CustomerHistoryController } from './customer-history.controller';
import { CustomerHistoryService } from './customer-history.service';

describe('CustomerHistoryController', () => {
  let controller: CustomerHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerHistoryController],
      providers: [CustomerHistoryService],
    }).compile();

    controller = module.get<CustomerHistoryController>(CustomerHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
