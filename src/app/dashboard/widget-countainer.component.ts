import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DashingGridsterItem } from './interfaces/dashing-gridster-item';
import { WidgetHostDirective } from './widget-host.directive';
import { HelloWorldComponent } from './widgets/hello-world/hello-world.component';
@Component({
  selector: 'app-widget-countainer',
  template: `<ng-template [appWidgetHost]="data"></ng-template>`,
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        align-items: center;
      }
    `
  ]
})
export class WidgetCountainerComponent implements OnInit {
  @Input()
  data: DashingGridsterItem;
  @ViewChild(WidgetHostDirective)
  widgetHostDirective: WidgetHostDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  private injectComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.widget.component);
    const componentRef = this.widgetHostDirective.viewContainerRef.createComponent(componentFactory);
    const key = 'data';
    componentRef.instance[key] = this.data;
  }
  ngOnInit() {
    if (!this.data.widget.component) {
      return;
    }
    this.injectComponent();
  }
}
