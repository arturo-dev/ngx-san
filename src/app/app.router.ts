import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

const ROUTES: Route[] = [
  {
    path: '',
    loadChildren: './lazy/lazy.module#LazyModule'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class AppRouterModule {}
