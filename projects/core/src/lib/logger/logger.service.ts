import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { LoggerLevel } from './logger.config';

/**
 *  Service to log in console, also can be configured to send traces to and Api
 *
 * @example
 *  this.logger.info('Doing something to trace with', {id: 1, name: 'foo'});
 *  this.logger.debug('Debuging something');
 *
 */
@Injectable()
export class LoggerService {
  private STYLES_COMMON = 'color: white; border-radius: 2px;';
  private STYLES_INFO = `${this.STYLES_COMMON} background-color: #0077c2;`;
  private STYLES_ERROR = `${this.STYLES_COMMON} background-color: #F44336;`;
  private STYLES_DEBUG = `${this.STYLES_COMMON} background-color: #F57C00;`;

  constructor() {
    this.info(`Instantiating logger with config`, CoreModule.config.logger);
  }

  /**
   * @description Output info traces
   * @param args - Trace
   */
  info(...args: any[]): void {
    // tslint:disable-next-line:no-console
    console.info('%c[INFO]', this.STYLES_INFO, ...args);

    if (
      CoreModule.config.logger.enabled &&
      CoreModule.config.logger.level === LoggerLevel.INFO
    ) {
      // TODO: trace
    }
  }

  /**
   * @description Output error traces
   * @param args - Trace
   */
  error(...args: any[]): void {
    // tslint:disable-next-line:no-console
    console.info('%c[ERROR]', this.STYLES_ERROR, ...args);

    if (
      CoreModule.config.logger.enabled &&
      CoreModule.config.logger.level === LoggerLevel.INFO
    ) {
      // TODO: trace
    }
  }

  /**
   * @description Output debug traces
   * @param args - Trace
   */
  debug(...args: any[]): void {
    // tslint:disable-next-line:no-console
    console.info('%c[DEBUG]', this.STYLES_DEBUG, ...args);

    if (
      CoreModule.config.logger.enabled &&
      CoreModule.config.logger.level === LoggerLevel.INFO
    ) {
      // TODO: trace
    }
  }
}
