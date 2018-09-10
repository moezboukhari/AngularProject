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

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, GridsterModule, DynamicModule.withComponents([DashboardComponent])],
  declarations: [DashboardComponent],
  providers: [DashboardgridsterconfigService],
  exports: [GridsterItemComponent, GridsterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DashboardModule {}
