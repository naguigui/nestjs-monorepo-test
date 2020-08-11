import { Test, TestingModule } from '@nestjs/testing';
import { ServiceCommonService } from './service-common.service';

describe('ServiceCommonService', () => {
  let service: ServiceCommonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceCommonService],
    }).compile();

    service = module.get<ServiceCommonService>(ServiceCommonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
