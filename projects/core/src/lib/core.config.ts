import { LoggerConfig } from "./logger/logger.config";
import { ApiConfig } from "./api/api.config";

export class CoreConfig {
  logger: LoggerConfig = new LoggerConfig();
  api: ApiConfig;
}
