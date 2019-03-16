import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage = {};

  constructor(private logger: LoggerService) {}

  save<T>(options: { key: string; data: T }): void {
    this.logger.debug(
      'Saving on storage',
      options.key,
      'with data',
      options.data
    );
    this.storage[options.key] = JSON.stringify(options.data);
  }

  recover<T>(options: { key: string; delete?: boolean }): T {
    const cache = this.storage[options.key];

    if (options.delete) {
      delete this.storage[options.key];
    }

    return cache;
  }

  clear(): void {
    this.logger.debug('Clearing storage');
    this.storage = {};
  }
}
