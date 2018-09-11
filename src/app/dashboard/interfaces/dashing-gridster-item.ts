import { GridsterItem } from 'angular-gridster2';

interface Widget {
  icon: string | null;
  class: string | null;
  component: any;
}
export interface DashingGridsterItem extends GridsterItem {
  widget: Widget;
}
