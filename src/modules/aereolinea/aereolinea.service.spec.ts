import { Test, TestingModule } from '@nestjs/testing';
import { AereolineaService } from './aereolinea.service';

describe('AereolineaService', () => {
  let service: AereolineaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AereolineaService],
    }).compile();

    service = module.get<AereolineaService>(AereolineaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
