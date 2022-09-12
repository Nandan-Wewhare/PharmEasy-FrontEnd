import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUser: any;
  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) {}

  login(phone: string, password: string) {
    return this.httpClient.post(`${environment.host}/auth/login`, {
      phone: phone,
      password: password,
    });
  }

  register(phone: string, password: string) {
    return this.httpClient.post(`${environment.host}/auth/register`, {
      phone: phone,
      password: password,
    });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(Constants.AUTH_TOKEN) != null;
  }

  logout(): void {
    localStorage.removeItem(Constants.AUTH_TOKEN);
    this.snackBar.open('Logged out successfully!', '', { duration: 2000 });
  }

  getLoggedInUser(): any {
    return this.loggedInUser != undefined
      ? JSON.parse(this.loggedInUser)
      : null;
  }

  setLoginData(token: string, user: string): void {
    localStorage.setItem(Constants.AUTH_TOKEN, token);
    localStorage.setItem(Constants.LOGGED_IN_USER, user);
  }
}
