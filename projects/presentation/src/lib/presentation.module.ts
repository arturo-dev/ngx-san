import { NgModule } from '@angular/core';
import { PresentationComponent } from './presentation.component';
import { InputComponent } from './input/input.component';
import { LoadingDirective } from './loading/loading.directive';
import { LoadingComponent } from './loading/loading.component';
import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';
import { InfoBoxComponent } from './info-box/info-box.component';

@NgModule({
  imports: [],
  declarations: [
    PresentationComponent,
    InputComponent,
    LoadingDirective,
    LoadingComponent,
    ButtonComponent,
    LinkComponent,
    InfoBoxComponent
  ],
  exports: [
    PresentationComponent,
    InputComponent,
    LoadingDirective,
    ButtonComponent,
    LinkComponent,
    InfoBoxComponent
  ],
  entryComponents: [LoadingComponent]
})
export class PresentationModule {}
