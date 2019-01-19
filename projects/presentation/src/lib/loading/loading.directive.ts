import {
  Directive,
  Input,
  ComponentFactoryResolver,
  ComponentRef,
  TemplateRef,
  ViewContainerRef,
  ComponentFactory
} from '@angular/core';
import { LoadingComponent } from './loading.component';

/**
 * @description Directive to replace element with a load spinner.
 */
@Directive({
  selector: '[sanPresnLoading]'
})
export class LoadingDirective {
  loadingFactory: ComponentFactory<LoadingComponent>;
  loadingComponent: ComponentRef<LoadingComponent>;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.loadingFactory = this.componentFactoryResolver.resolveComponentFactory(
      LoadingComponent
    );
  }

  @Input()
  set sanPresnLoading(loading: boolean) {
    this.vcRef.clear();

    if (loading) {
      this.loadingComponent = this.vcRef.createComponent(this.loadingFactory);
    } else {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }
}
