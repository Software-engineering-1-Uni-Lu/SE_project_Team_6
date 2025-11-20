import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { BehaviorSubject, Observable, from, map } from 'rxjs';
import { UserRole } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private currentUserRoleSubject = new BehaviorSubject<UserRole | null>(null);
  public currentUserRole$ = this.currentUserRoleSubject.asObservable();

  constructor(private supabase: SupabaseService) {
    this.supabase.currentUser$.subscribe((user) => {
      this.isAuthenticatedSubject.next(!!user);
      if (user) {
        this.loadUserRole(user.id);
      } else {
        this.currentUserRoleSubject.next(null);
      }
    });
  }

  private async loadUserRole(userId: string) {
    try {
      const { data, error } = await this.supabase
        .from('users')
        .select('role')
        .eq('id', userId)
        .single();

      if (data && !error) {
        this.currentUserRoleSubject.next(data.role as UserRole);
      }
    } catch (error) {
      console.error('Error loading user role:', error);
    }
  }

  login(email: string, password: string): Observable<any> {
    return from(this.supabase.signIn(email, password));
  }

  register(email: string, password: string, userData: any): Observable<any> {
    return from(this.supabase.signUp(email, password, userData));
  }

  logout(): Observable<any> {
    return from(this.supabase.signOut());
  }

  resetPassword(email: string): Observable<any> {
    return from(this.supabase.resetPassword(email));
  }

  getCurrentUser() {
    return this.supabase.getCurrentUser();
  }

  hasRole(role: UserRole): boolean {
    return this.currentUserRoleSubject.value === role;
  }

  hasAnyRole(roles: UserRole[]): boolean {
    const currentRole = this.currentUserRoleSubject.value;
    return currentRole ? roles.includes(currentRole) : false;
  }
}
