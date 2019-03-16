import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { languageLoader } from './language.factory';
import { HttpClient } from '@angular/common/http';
import { LanguagePipe } from './language.pipe';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: languageLoader,
        deps: [HttpClient, Injector]
      }
    })
  ],
  declarations: [LanguagePipe],
  exports: [TranslateModule, LanguagePipe]
})
export class LanguageModule {}
