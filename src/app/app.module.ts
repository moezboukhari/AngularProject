import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard/dashboardRouteModule';
import { AppRoutingModule } from './app.routes';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterOutlet, RouterModule } from '@angular/router';
@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, RouterOutlet, RouterModule, DashboardModule, DashboardRoutingModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
