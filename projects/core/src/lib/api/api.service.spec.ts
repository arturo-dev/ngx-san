import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { CoreModule } from '../core.module';

describe('ApiService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [CoreModule.forRoot()] })
  );

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
