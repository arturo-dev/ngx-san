import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf,
  ErrorHandler
} from '@angular/core';
import { CoreConfig, Config } from './core.config';
import { HttpClientModule } from '@angular/common/http';
import { LoggerService } from './logger/logger.service';
import { ApiService } from './api/api.service';
import { LanguageModule } from './language/language.module';
import { LanguagePipe } from './language/language.pipe';
import { ErrorHandlerService } from './error/error-handler.service';

/**
 *
 * @description Contains the core services:
 *  - Api
 *  - Error
 *  - Initialization
 *  - Language
 *  - Logger
 *  - Storage
 *  - User
 */
@NgModule({
  imports: [HttpClientModule, LanguageModule],
  providers: [
    ApiService,
    LoggerService,
    { provide: ErrorHandler, useClass: ErrorHandlerService }
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(config?: { environment: CoreConfig }): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: Config,
          useValue:
            config.environment || (<any>window).environment || new CoreConfig()
        }
      ]
    };
  }
}
