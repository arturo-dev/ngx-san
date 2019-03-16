import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  CoreModule,
  InitializationModule,
  LanguageModule
} from 'projects/core/src/public_api';
import { PresentationModule } from 'projects/presentation/src/public_api';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRouterModule } from './app.router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule.forRoot({
      environment: environment
    }),
    LanguageModule,
    InitializationModule,
    PresentationModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
