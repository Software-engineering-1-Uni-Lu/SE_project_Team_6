import { Routes } from '@angular/router';

export const CUSTOMER_ROUTES: Routes = [
  {
    path: 'profile',
    loadComponent: () =>
      import('./components/customer-profile.component').then((m) => m.CustomerProfileComponent),
  },
  {
    path: 'loyalty',
    loadComponent: () =>
      import('./components/loyalty-points.component').then((m) => m.LoyaltyPointsComponent),
  },
];
