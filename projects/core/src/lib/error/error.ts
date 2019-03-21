export class Error {
  constructor(public message: string, public time: Date) {}
}

export class ErrorMessage {
  static BOOT_LANG = 'BotLangError';
  static BOOT_USER = 'BotUserError';
}
