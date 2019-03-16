import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from './language.service';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {
  constructor(private language: LanguageService) {}

  transform(value: any, args?: any): any {
    return this.language.instant(value);
  }
}
