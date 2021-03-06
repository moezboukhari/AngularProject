import { DashingConfig } from '../app/dashboard/interfaces/dashing-config';
import { WidgetGiphyComponent } from '../app/dashboard/widgets/widget-giphy/widget-giphy.component';

const dashingConfig: DashingConfig = {
  dashboard: [
    {
      cols: 2,
      rows: 1,
      y: 0,
      x: 0,

      widget: {
        component: WidgetGiphyComponent,
        params: { q: 'funny silicon valley' },
        icon: null,
        class: 'bg-primary'
      }
    },
    { cols: 2, rows: 2, y: 0, x: 2, widget: { component: null, icon: 'fa fa-google', class: 'bg-secondary' } },
    {
      cols: 1,
      rows: 1,
      y: 0,
      x: 4,
      widget: { component: null, icon: 'fi flaticon-038-github', class: 'bg-light text-dark' }
    },
    { cols: 3, rows: 2, y: 1, x: 4, widget: { component: null, icon: 'fi flaticon-011-youtube', class: 'bg-danger' } },
    { cols: 1, rows: 1, y: 4, x: 5, widget: { component: null, icon: null, class: 'bg-warning' } },
    {
      cols: 1,
      rows: 1,
      y: 2,
      x: 1,
      widget: { component: null, icon: 'fi flaticon-012-google-drive', class: 'bg-light text-dark' }
    },
    {
      cols: 2,
      rows: 2,
      y: 5,
      x: 5,

      widget: { component: WidgetGiphyComponent, params: { q: 'funny cat' }, icon: null, class: 'bg-dark' }
    },
    {
      cols: 2,
      rows: 2,
      y: 3,
      x: 2,
      params: { q: 'funny cat' },
      widget: { component: WidgetGiphyComponent, params: { q: 'funny cat' }, icon: null, class: 'bg-light text-dark' }
    },
    { cols: 2, rows: 1, y: 2, x: 2, widget: { component: null, icon: 'fi flaticon-043-twitter', class: 'bg-primary' } },
    { cols: 1, rows: 1, y: 3, x: 4, widget: { component: null, icon: 'fa fa-warning', class: 'bg-danger' } },
    { cols: 1, rows: 1, y: 0, x: 6, widget: { component: null, icon: null, class: 'bg-sacondary' } }
  ]
};
export const environment = {
  production: false,
  dashingConfig: dashingConfig
};
