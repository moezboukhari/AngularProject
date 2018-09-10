import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard/dashboardRouteModule';
import { AppRoutingModule } from './app.routes';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { RouterOutlet, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GridsterModule, GridsterItemComponent } from 'angular-gridster2';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DynamicModule } from 'ng-dynamic-component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    RouterModule,
    GridsterModule,
    DashboardModule,
    DashboardRoutingModule,
    AppRoutingModule,
    DynamicModule.withComponents([DashboardComponent])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [GridsterModule, GridsterItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
