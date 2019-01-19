import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { ApiGetOptions } from './api.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../logger/logger.service';

/**
 * @description Service to interact with the api
 */
@Injectable()
export class ApiService {
  public static URI = ``;

  constructor(private http: HttpClient, private logger: LoggerService) {
    this.logger.info(`Instantiating api with config`, CoreModule.config.api);
  }

  /**
   * @description Method to do get operations through api.
   */
  get<T>(path: string, options?: ApiGetOptions): Observable<T> {
    return this.http.get<T>(
      `${path.indexOf('http') > -1 ? '' : ApiService.URI}${path}`,
      options
    );
  }
}
