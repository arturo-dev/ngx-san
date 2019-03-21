import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { StorageClearMode } from './storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage = {};

  constructor(private logger: LoggerService) {}

  save<T>(options: { key: string; data: T; session?: boolean }): void {
    this.logger.debug(
      'Saving on storage',
      options.key,
      'with data',
      options.data
    );
    this.storage[options.key] = options.data;
    if (options.session) {
      sessionStorage.setItem(options.key, JSON.stringify(options.data));
    }
  }

  recover<T>(options: { key: string; delete?: boolean }): T {
    const cache =
      this.storage[options.key] ||
      JSON.parse(sessionStorage.getItem(options.key));

    if (options.delete) {
      delete this.storage[options.key];
      sessionStorage.removeItem(options.key);
    }

    return cache;
  }

  clear(mode: StorageClearMode): void {
    this.logger.debug('Clearing storage');
    this.storage = {};
    sessionStorage.clear();
  }
}
