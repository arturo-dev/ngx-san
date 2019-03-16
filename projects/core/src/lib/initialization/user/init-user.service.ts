import { Injectable } from '@angular/core';
import { UserService } from '../../user/user.service';
import { LoggerService } from '../../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class InitUserService {
  constructor(private logger: LoggerService, private user: UserService) {}

  initialize(): Promise<any> {
    this.logger.debug('Initializing user');
    return new Promise((resolve, reject) => {
      this.user.info.subscribe(
        user => {
          this.logger.debug('Initialized user', user);
          resolve();
        },
        () => reject()
      );
    });
  }
}
