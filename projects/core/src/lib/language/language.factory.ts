import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CoreConfig, Config } from '../core.config';
import { Injector } from '@angular/core';

export function languageLoader(http: HttpClient, injector: Injector) {
  const config = injector.get(Config);
  return new TranslateHttpLoader(
    http,
    config && config.api && config.api.services
      ? `${config.api.url}${config.api.services.language}/v1/language/`
      : '',
    '.json'
  );
}
