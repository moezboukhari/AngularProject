import { Injectable } from '@angular/core';
import {
  CompactType,
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridType,
  GridsterItemComponent,
  GridsterPush
} from 'angular-gridster2';

const options: GridsterConfig = {
  gridType: GridType.Fit,
  displayGrid: DisplayGrid.Always,
  pushItems: true,
  draggable: {
    enabled: true
  },
  resizable: {
    enabled: true
  }
};

@Injectable({
  providedIn: 'root'
})
export class DashboardgridsterconfigService {
  constructor() {}
  getOptions(): GridsterConfig {
    return options;
  }
}
