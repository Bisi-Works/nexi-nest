import { Test, TestingModule } from '@nestjs/testing';
import { RentalAgencyController } from './rental-agency.controller';
import { RentalAgencyService } from './rental-agency.service';

describe('RentalAgencyController', () => {
  let controller: RentalAgencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentalAgencyController],
      providers: [RentalAgencyService],
    }).compile();

    controller = module.get<RentalAgencyController>(RentalAgencyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
