import { Test, TestingModule } from '@nestjs/testing';
import { HealthIndicationService } from './health-indication.service';

describe('HealthIndicationService', () => {
  let service: HealthIndicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthIndicationService],
    }).compile();

    service = module.get<HealthIndicationService>(HealthIndicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
