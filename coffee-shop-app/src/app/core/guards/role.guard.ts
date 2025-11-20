import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserRole } from '../enums';
import { map } from 'rxjs/operators';

export const roleGuard = (allowedRoles: UserRole[]): CanActivateFn => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.currentUserRole$.pipe(
      map((role) => {
        if (!role || !allowedRoles.includes(role)) {
          router.navigate(['/unauthorized']);
          return false;
        }
        return true;
      })
    );
  };
};
