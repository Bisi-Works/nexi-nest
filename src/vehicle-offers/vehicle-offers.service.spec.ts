import { Test, TestingModule } from '@nestjs/testing';
import { VehicleOffersService } from './vehicle-offers.service';

describe('VehicleOffersService', () => {
  let service: VehicleOffersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleOffersService],
    }).compile();

    service = module.get<VehicleOffersService>(VehicleOffersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
