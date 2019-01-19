import {
  NgModule,
  ModuleWithProviders,
  Provider,
  Optional,
  SkipSelf
} from '@angular/core';
import { CoreConfig } from './core.config';
import { HttpClientModule } from '@angular/common/http';
import { LoggerService } from './logger/logger.service';
import { ApiService } from './api/api.service';

/**
 *
 * @description Contains the core services:
 *  - Api
 *  - Logger
 */
@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  exports: [],
  providers: [ApiService, LoggerService]
})
export class CoreModule {
  private static _config: CoreConfig;

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(config?: CoreConfig): ModuleWithProviders {
    this._config = config || new CoreConfig();

    return {
      ngModule: CoreModule,
      providers: []
    };
  }

  static get config(): CoreConfig {
    return this._config;
  }
}
