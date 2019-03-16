import { Injectable } from '@angular/core';
import { LoggerService } from '../../logger/logger.service';
import { LanguageService } from '../../language/language.service';

@Injectable({
  providedIn: 'root'
})
export class InitLangService {
  constructor(
    private logger: LoggerService,
    private language: LanguageService
  ) {}

  initialize(): Promise<any> {
    this.logger.debug('Initializing language');
    return new Promise((resolve, reject) => {
      this.language.use('es_ES').subscribe(
        () => {
          resolve();
        },
        () => reject()
      );
    });
  }
}
