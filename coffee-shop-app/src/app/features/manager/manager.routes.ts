import { Routes } from '@angular/router';

export const MANAGER_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/manager-dashboard.component').then((m) => m.ManagerDashboardComponent),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./components/menu-management.component').then((m) => m.MenuManagementComponent),
  },
  {
    path: 'staff',
    loadComponent: () =>
      import('./components/staff-management.component').then((m) => m.StaffManagementComponent),
  },
  {
    path: 'inventory',
    loadComponent: () =>
      import('./components/inventory-management.component').then(
        (m) => m.InventoryManagementComponent
      ),
  },
];
