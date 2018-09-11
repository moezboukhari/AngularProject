import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GridsterModule, GridsterItemComponent, GridsterItem } from 'angular-gridster2';
import { WidgetCountainerComponent } from './widget-countainer.component';
import { HelloWorldComponent } from './widgets/hello-world/hello-world.component';

const routes: Routes = [{ path: 'dashboard', component: DashboardComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes), GridsterModule],
  exports: [RouterModule],
  entryComponents: [WidgetCountainerComponent, HelloWorldComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DashboardRoutingModule {}
