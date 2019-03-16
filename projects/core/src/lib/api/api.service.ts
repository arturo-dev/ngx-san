import { Injectable, Injector, Inject } from '@angular/core';
import { ApiGetOptions } from './api.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../logger/logger.service';
import { CoreConfig, Config } from '../core.config';

/**
 * @description Service to interact with the api
 */
@Injectable()
export class ApiService {
  private logger: LoggerService;

  constructor(
    private http: HttpClient,
    private injector: Injector,
    @Inject(Config) private config: CoreConfig
  ) {
    this.logger = this.injector.get(LoggerService);
    this.logger.info(`Instantiating api with config`, this.config.api);
  }

  /**
   * @description Method to do get operations through api.
   */
  get<T>(path: string, options?: ApiGetOptions): Observable<T> {
    return this.http.get<T>(
      `${path.indexOf('http') > -1 ? '' : this.config.api.url}${path}`,
      options
    );
  }
}
