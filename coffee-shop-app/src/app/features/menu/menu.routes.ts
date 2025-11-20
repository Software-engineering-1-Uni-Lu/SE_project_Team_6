import { Routes } from '@angular/router';

export const MENU_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/menu-list.component').then((m) => m.MenuListComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./components/menu-item-detail.component').then((m) => m.MenuItemDetailComponent),
  },
];
