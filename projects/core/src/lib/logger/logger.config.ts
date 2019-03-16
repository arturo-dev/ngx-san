export class LoggerConfig {
  enabled?: boolean;
  level?: LoggerLevel = LoggerLevel.INFO;
  tracert?: URL;
}

export enum LoggerLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
  TRACE
}
