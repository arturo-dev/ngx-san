import { Injectable, Inject } from '@angular/core';
import { LoggerLevel } from './logger.config';
import { TraceService } from './trace/trace.service';
import { CoreConfig, Config } from '../core.config';

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

  constructor(
    private trace: TraceService,
    @Inject(Config) private config: CoreConfig
  ) {
    this.info(`Instantiating logger with config`, this.config.logger);
  }

  /**
   * @description Output info traces
   * @param args - Trace
   */
  info(...args: any[]): void {
    // tslint:disable-next-line:no-console
    console.info('%c[INFO]', this.STYLES_INFO, ...args);

    if (
      this.config &&
      this.config.logger &&
      this.config.logger.enabled &&
      this.config.logger.level === LoggerLevel.INFO
    ) {
      // tslint:disable-next-line:no-console
      console.info('%c[INFO]', this.STYLES_INFO, 'Sending trace', {
        mode: 'INFO',
        info: args
      });
      this.trace.send({ mode: 'INFO', info: args });
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
      this.config &&
      this.config.logger &&
      this.config.logger.enabled &&
      this.config.logger.level === LoggerLevel.ERROR
    ) {
      // tslint:disable-next-line:no-console
      console.info('%c[INFO]', this.STYLES_INFO, 'Sending trace', {
        mode: 'ERROR',
        info: args
      });
      this.trace.send({ mode: 'ERROR', info: args });
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
      this.config &&
      this.config.logger &&
      this.config.logger.enabled &&
      this.config.logger.level === LoggerLevel.DEBUG
    ) {
      // tslint:disable-next-line:no-console
      console.info('%c[INFO]', this.STYLES_INFO, 'Sending trace', {
        mode: 'DEBUG',
        info: args
      });
      this.trace.send({ mode: 'DEBUG', info: args });
    }
  }
}
