import { Test, TestingModule } from '@nestjs/testing';
import { UserPasscodeService } from './user-passcode.service';

describe('UserPasscodeService', () => {
  let service: UserPasscodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPasscodeService],
    }).compile();

    service = module.get<UserPasscodeService>(UserPasscodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
