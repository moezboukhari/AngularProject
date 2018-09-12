import { Directive, ViewContainerRef } from '@angular/core';
import { DashingGridsterItem } from './interfaces/dashing-gridster-item';
import { Input } from '@angular/core';
@Directive({
  selector: '[appWidgetHost]'
})
export class WidgetHostDirective {
  @Input('appWidgetHost')
  set appWidgetHost(data: DashingGridsterItem) {
    this.data = data;
  }
  private data: DashingGridsterItem;
  constructor(public viewContainerRef: ViewContainerRef) {}
}
