import { NgModule } from '@angular/core';
import { PresentationComponent } from './presentation.component';
import { InputComponent } from './input/input.component';
import { LoadingDirective } from './loading/loading.directive';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [],
  declarations: [
    PresentationComponent,
    InputComponent,
    LoadingDirective,
    LoadingComponent
  ],
  exports: [PresentationComponent, InputComponent, LoadingDirective],
  entryComponents: [LoadingComponent]
})
export class PresentationModule {}
