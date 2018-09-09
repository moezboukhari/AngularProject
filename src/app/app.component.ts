import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<html><body><router-outlet></router-outlet></body></html>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject';
}
