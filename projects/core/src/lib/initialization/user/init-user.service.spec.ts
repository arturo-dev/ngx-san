import { TestBed } from '@angular/core/testing';

import { InitUserService } from './init-user.service';

describe('InitUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitUserService = TestBed.get(InitUserService);
    expect(service).toBeTruthy();
  });
});
