import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicModule } from 'ng-dynamic-component';
import { Component, OnInit } from '@angular/core';
import {
  CompactType,
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridType,
  GridsterItemComponent,
  GridsterPush
} from 'angular-gridster2';
import { ChangeDetectionStrategy } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DashboardgridsterconfigService } from './dashboardgridsterconfig.service';
import { environment } from 'src/environments/environment';
import { DashingGridsterItem } from 'src/app/dashboard/interfaces/dashing-gridster-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<DashingGridsterItem>;
  constructor(private dashboardgridsterconfigService: DashboardgridsterconfigService) {}
  ngOnInit() {
    this.options = this.dashboardgridsterconfigService.getOptions();

    this.dashboard = environment.dashingConfig.dashboard;
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }
}
