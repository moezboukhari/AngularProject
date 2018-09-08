import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard/dashboardRouteModule';
import { AppRoutingModule } from './app.routes';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { FooDirective } from './foo.directive';
import { CapitalisePipe } from './capitalise.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, FooDirective, CapitalisePipe, PageNotFoundComponent],
  imports: [BrowserModule, DashboardModule, DashboardRoutingModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
