import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf
} from '@angular/core';
import { CoreConfig, Config } from './core.config';
import { HttpClientModule } from '@angular/common/http';
import { LoggerService } from './logger/logger.service';
import { ApiService } from './api/api.service';
import { LanguageModule } from './language/language.module';
import { LanguagePipe } from './language/language.pipe';

/**
 *
 * @description Contains the core services:
 *  - Api
 *  - Logger
 */
@NgModule({
  imports: [HttpClientModule, LanguageModule],
  providers: [ApiService, LoggerService]
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
