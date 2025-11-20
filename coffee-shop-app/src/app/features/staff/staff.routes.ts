import { Routes } from '@angular/router';

export const STAFF_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/staff-dashboard.component').then((m) => m.StaffDashboardComponent),
  },
  {
    path: 'order-queue',
    loadComponent: () =>
      import('./components/order-queue.component').then((m) => m.OrderQueueComponent),
  },
];
