import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from 'projects/core/src/public_api';
import { PresentationModule } from 'projects/presentation/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule.forRoot(), PresentationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
