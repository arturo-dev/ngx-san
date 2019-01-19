import { TestBed, inject } from '@angular/core/testing';

import { LoggerService } from './logger.service';
import { CoreModule } from '../core.module';

describe('LoggerService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [CoreModule.forRoot()] })
  );

  it('should be created', () => {
    const service: LoggerService = TestBed.get(LoggerService);
    expect(service).toBeTruthy();
  });

  it('should trace info', inject([LoggerService], (logger: LoggerService) => {
    logger.info('Trace test info');
  }));

  it('should trace debug', inject([LoggerService], (logger: LoggerService) => {
    logger.debug('Trace test debug');
  }));

  it('should trace error', inject([LoggerService], (logger: LoggerService) => {
    logger.error('Trace test error');
  }));
});
