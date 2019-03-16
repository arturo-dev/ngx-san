import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRouterModule } from './lazy.router';
import { LazyComponent } from './lazy.component';
import { LanguageModule } from 'projects/core/src/public_api';

@NgModule({
  imports: [CommonModule, LazyRouterModule, LanguageModule],
  declarations: [LazyComponent]
})
export class LazyModule {}
