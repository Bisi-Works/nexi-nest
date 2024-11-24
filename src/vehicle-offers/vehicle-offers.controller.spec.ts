import { Test, TestingModule } from '@nestjs/testing';
import { VehicleOffersController } from './vehicle-offers.controller';
import { VehicleOffersService } from './vehicle-offers.service';

describe('VehicleOffersController', () => {
  let controller: VehicleOffersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleOffersController],
      providers: [VehicleOffersService],
    }).compile();

    controller = module.get<VehicleOffersController>(VehicleOffersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
