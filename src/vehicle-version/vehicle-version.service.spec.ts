import { Test, TestingModule } from '@nestjs/testing';
import { VehicleVersionService } from './vehicle-version.service';

describe('VehicleVersionService', () => {
  let service: VehicleVersionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleVersionService],
    }).compile();

    service = module.get<VehicleVersionService>(VehicleVersionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
