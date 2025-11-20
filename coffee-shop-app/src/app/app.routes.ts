import { Routes } from '@angular/router';
import { authGuard, roleGuard } from './core/guards';
import { UserRole } from './core/enums';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'menu',
    loadChildren: () => import('./features/menu/menu.routes').then((m) => m.MENU_ROUTES),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./features/ordering/ordering.routes').then((m) => m.ORDERING_ROUTES),
    canActivate: [authGuard],
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./features/customer/customer.routes').then((m) => m.CUSTOMER_ROUTES),
    canActivate: [authGuard, roleGuard([UserRole.CUSTOMER])],
  },
  {
    path: 'staff',
    loadChildren: () => import('./features/staff/staff.routes').then((m) => m.STAFF_ROUTES),
    canActivate: [authGuard, roleGuard([UserRole.STAFF, UserRole.MANAGER])],
  },
  {
    path: 'manager',
    loadChildren: () => import('./features/manager/manager.routes').then((m) => m.MANAGER_ROUTES),
    canActivate: [authGuard, roleGuard([UserRole.MANAGER])],
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
    canActivate: [authGuard, roleGuard([UserRole.ADMIN])],
  },
  // {
  //   path: 'unauthorized',
  //   loadComponent: () => import('./shared/components/unauthorized.component').then(m => m.UnauthorizedComponent)
  // },
  // {
  //   path: '**',
  //   loadComponent: () => import('./shared/components/not-found.component').then(m => m.NotFoundComponent)
  // }
];
