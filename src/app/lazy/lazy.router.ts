import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LazyComponent } from './lazy.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: LazyComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class LazyRouterModule {}
