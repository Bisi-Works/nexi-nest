import { Test, TestingModule } from '@nestjs/testing';
import { HealthIndicationController } from './health-indication.controller';
import { HealthIndicationService } from './health-indication.service';

describe('HealthIndicationController', () => {
  let controller: HealthIndicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthIndicationController],
      providers: [HealthIndicationService],
    }).compile();

    controller = module.get<HealthIndicationController>(HealthIndicationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
