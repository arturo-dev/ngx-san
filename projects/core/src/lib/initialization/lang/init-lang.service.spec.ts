import { TestBed } from '@angular/core/testing';

import { InitLangService } from './init-lang.service';

describe('InitLangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitLangService = TestBed.get(InitLangService);
    expect(service).toBeTruthy();
  });
});
