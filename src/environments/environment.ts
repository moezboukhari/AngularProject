// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { DashingConfig } from '../app/dashboard/interfaces/dashing-config';
const dashingConfig: DashingConfig = {
  dashboard: [
    { cols: 2, rows: 1, y: 0, x: 0, widget: { icon: 'fa fa-magic', class: 'bg-primary' } },
    { cols: 2, rows: 2, y: 0, x: 2, widget: { icon: 'fa fa-google', class: 'bg-secondary' } },
    { cols: 1, rows: 1, y: 0, x: 4, widget: { icon: null, class: 'bg-success' } },
    { cols: 3, rows: 2, y: 1, x: 4, widget: { icon: 'fi flaticon-011-youtube', class: 'bg-danger' } },
    { cols: 1, rows: 1, y: 4, x: 5, widget: { icon: null, class: 'bg-warning' } },
    { cols: 1, rows: 1, y: 2, x: 1, widget: { icon: null, class: 'bg-light text-dark' } },
    { cols: 2, rows: 2, y: 5, x: 5, widget: { icon: 'fa fa-bitcoin', class: 'bg-dark' } },
    { cols: 2, rows: 2, y: 3, x: 2, widget: { icon: 'fa fa-download', class: 'bg-light text-dark' } },
    { cols: 2, rows: 1, y: 2, x: 2, widget: { icon: 'fi flaticon-021-facebook', class: 'bg-primary' } },
    { cols: 1, rows: 1, y: 3, x: 4, widget: { icon: 'fa fa-warning', class: 'bg-danger' } },
    { cols: 1, rows: 1, y: 0, x: 6, widget: { icon: 'fi flaticon-025-instagram', class: 'bg-light' } }
  ]
};
export const environment = {
  production: false,
  dashingConfig: dashingConfig
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
