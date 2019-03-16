import { LoggerConfig } from './logger/logger.config';
import { ApiConfig } from './api/api.config';
import { Injectable } from '@angular/core';

export class CoreConfig {
  production?: boolean;
  logger?: LoggerConfig = new LoggerConfig();
  api?: ApiConfig;
}

@Injectable()
export class Config extends CoreConfig {}
