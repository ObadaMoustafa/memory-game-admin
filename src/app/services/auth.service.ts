import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { API_BASE_URL } from '../app.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  currentUser = signal<string | null>(localStorage.getItem('user'));
  isAuthenticated = signal<boolean>(!!localStorage.getItem('token'));

  login(username: string, password: string) {
    return this.http
      .post<{ token: string }>(`${API_BASE_URL}/memory/login`, { username, password })
      .pipe(
        tap((response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', username);

          this.currentUser.set(username);
          this.isAuthenticated.set(true);

          this.router.navigate(['/']);
        })
      );
  }

  logout(message?: string) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
    if (message) {
      this.router.navigate(['/login'], { state: { error: message } });
    } else {
      this.router.navigate(['/login']);
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
