import { Test, TestingModule } from '@nestjs/testing';
import { UserPasscodeController } from './user-passcode.controller';
import { UserPasscodeService } from './user-passcode.service';

describe('UserPasscodeController', () => {
  let controller: UserPasscodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPasscodeController],
      providers: [UserPasscodeService],
    }).compile();

    controller = module.get<UserPasscodeController>(UserPasscodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
