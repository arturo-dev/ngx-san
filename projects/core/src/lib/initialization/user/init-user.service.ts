import { Injectable } from '@angular/core';
import { UserService } from '../../user/user.service';
import { LoggerService } from '../../logger/logger.service';
import { Error, ErrorMessage } from '../../error/error';

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
          resolve(user);
        },
        () => reject(new Error(ErrorMessage.BOOT_USER, new Date()))
      );
    });
  }
}
