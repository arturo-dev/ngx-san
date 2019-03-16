import { NgModule, APP_INITIALIZER, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appInitializeLang } from './lang/init-lang.factory';
import { InitLangService } from './lang/init-lang.service';
import { appInitializeUser } from './user/init-user.factory';
import { InitUserService } from './user/init-user.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializeLang,
      deps: [InitLangService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializeUser,
      deps: [InitUserService],
      multi: true
    }
  ]
})
export class InitializationModule {}
