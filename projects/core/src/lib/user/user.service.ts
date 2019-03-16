import { Injectable, Inject } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService } from '../storage/storage.service';
import { User } from './user';
import { CoreConfig, Config } from '../core.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private USER_ENDPOINT = '/v1/user';
  private SERVICES_ENDPOINT = '/v1/services';

  private KEY_USER = 'USER';
  private KEY_SERVICES = 'SERVICES';

  constructor(
    private logger: LoggerService,
    private api: ApiService,
    private storage: StorageService,
    @Inject(Config) private config: CoreConfig
  ) {}

  get info(): Observable<User> {
    const cache = this.storage.recover({ key: this.KEY_USER });
    if (cache) {
      return Observable.create(cache);
    }

    return this.api
      .get(`${this.config.api.services.user}${this.USER_ENDPOINT}`)
      .pipe(
        map(data => {
          this.logger.debug('Caching user', data);
          this.storage.save({
            key: this.KEY_USER,
            data: data
          });
          return data;
        })
      );
  }

  get services(): Observable<any> {
    const cache = this.storage.recover({ key: this.KEY_SERVICES });
    if (cache) {
      return Observable.create(cache);
    }

    return this.api
      .get(`${this.config.api.services.user}${this.SERVICES_ENDPOINT}`)
      .pipe(
        map(data => {
          this.logger.debug('Caching services', data);
          this.storage.save({
            key: this.KEY_SERVICES,
            data: data
          });
          return data;
        })
      );
  }
}
