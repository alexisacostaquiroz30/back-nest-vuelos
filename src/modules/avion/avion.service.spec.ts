import { Test, TestingModule } from '@nestjs/testing';
import { AvionService } from './avion.service';

describe('AvionService', () => {
  let service: AvionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvionService],
    }).compile();

    service = module.get<AvionService>(AvionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
