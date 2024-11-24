import { Test, TestingModule } from '@nestjs/testing';
import { RentalAgencyService } from './rental-agency.service';

describe('RentalAgencyService', () => {
  let service: RentalAgencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentalAgencyService],
    }).compile();

    service = module.get<RentalAgencyService>(RentalAgencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
