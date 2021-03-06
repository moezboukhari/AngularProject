import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboardRouteModule';
import {
  GridsterModule,
  GridsterPush,
  GridsterItemComponent,
  GridType,
  GridsterItem,
  GridsterConfig,
  DisplayGrid,
  CompactType
} from 'angular-gridster2';
import { DynamicModule } from 'ng-dynamic-component';
import { DashboardgridsterconfigService } from './dashboardgridsterconfig.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloWorldComponent } from './widgets/hello-world/hello-world.component';
import { WidgetCountainerComponent } from './widget-countainer.component';
import { WidgetHostDirective } from './widget-host.directive';
import { HttpClientModule } from '@angular/common/http';
import { WidgetGiphyComponent } from './widgets/widget-giphy/widget-giphy.component';
import { HttpClient } from '@angular/common/http';
import { GiphyDataService } from './widgets/widgetGiphy/giphy-data.service';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, GridsterModule, HttpClientModule],
  declarations: [
    DashboardComponent,
    HelloWorldComponent,
    WidgetCountainerComponent,
    WidgetHostDirective,
    WidgetGiphyComponent
  ],
  providers: [DashboardgridsterconfigService, GiphyDataService],
  exports: [],
  entryComponents: [HelloWorldComponent, WidgetGiphyComponent, WidgetCountainerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DashboardModule {}
