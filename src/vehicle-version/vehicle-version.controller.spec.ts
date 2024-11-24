import { Test, TestingModule } from '@nestjs/testing';
import { VehicleVersionController } from './vehicle-version.controller';
import { VehicleVersionService } from './vehicle-version.service';

describe('VehicleVersionController', () => {
  let controller: VehicleVersionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleVersionController],
      providers: [VehicleVersionService],
    }).compile();

    controller = module.get<VehicleVersionController>(VehicleVersionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
