import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GridsterModule, GridsterItemComponent } from 'angular-gridster2';
import { HelloWorldComponent } from './dashboard/widgets/hello-world/hello-world.component';
@Component({
  selector: 'app-root',
  template: '<h1></h1><router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
@NgModule({
  imports: [RouterOutlet, RouterModule, GridsterModule, GridsterItemComponent],
  exports: [RouterOutlet],
  entryComponents: [HelloWorldComponent]
})
export class AppComponent {
  title = 'AngularProject';
}
