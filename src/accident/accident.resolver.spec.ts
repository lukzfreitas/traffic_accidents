import { Test, TestingModule } from '@nestjs/testing';
import { AccidentResolver } from './accident.resolver';

describe('AccidentResolver', () => {
  let resolver: AccidentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccidentResolver],
    }).compile();

    resolver = module.get<AccidentResolver>(AccidentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
