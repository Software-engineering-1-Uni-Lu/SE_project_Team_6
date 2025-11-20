import { Routes } from '@angular/router';

export const ORDERING_ROUTES: Routes = [
  {
    path: 'cart',
    loadComponent: () => import('./components/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./components/checkout.component').then((m) => m.CheckoutComponent),
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./components/order-history.component').then((m) => m.OrderHistoryComponent),
  },
];
