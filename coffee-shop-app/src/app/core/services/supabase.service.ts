import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser$: Observable<User | null>;

  constructor() {
    this.supabase = createClient(environment.supabase.url, environment.supabase.anonKey);

    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.currentUser$ = this.currentUserSubject.asObservable();

    // Check current session
    this.checkSession();

    // Listen to auth changes
    this.supabase.auth.onAuthStateChange((event, session) => {
      this.currentUserSubject.next(session?.user ?? null);
    });
  }

  private async checkSession() {
    const {
      data: { user },
    } = await this.supabase.auth.getUser();
    this.currentUserSubject.next(user);
  }

  get client(): SupabaseClient {
    return this.supabase;
  }

  // Auth methods
  async signUp(email: string, password: string, metadata?: any) {
    return await this.supabase.auth.signUp({
      email,
      password,
      options: { data: metadata },
    });
  }

  async signIn(email: string, password: string) {
    return await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
  }

  async signOut() {
    return await this.supabase.auth.signOut();
  }

  async resetPassword(email: string) {
    return await this.supabase.auth.resetPasswordForEmail(email);
  }

  async updateUser(updates: any) {
    return await this.supabase.auth.updateUser(updates);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  // Database operations helpers
  from(table: string) {
    return this.supabase.from(table);
  }

  // Storage operations
  storage(bucket: string) {
    return this.supabase.storage.from(bucket);
  }
}
