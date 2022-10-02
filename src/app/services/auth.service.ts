import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUser: any;
  private authToken: any;

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.getLoginData();
  }

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
    localStorage.clear();
    this.snackBar.open('Logged out successfully!', '', { duration: 2000 });
    this.router.navigate(['']);
  }

  getLoginData(): any {
    this.loggedInUser = localStorage.getItem(Constants.LOGGED_IN_USER);
    this.authToken = localStorage.getItem(Constants.AUTH_TOKEN);
  }

  setLoginData(token: string, user: string): void {
    localStorage.setItem(Constants.AUTH_TOKEN, token);
    localStorage.setItem(Constants.LOGGED_IN_USER, user);
    this.getLoginData();
  }

  getLoggedInUser(): any {
    return JSON.parse(this.loggedInUser);
  }

  getAuthToken(): any {
    return this.authToken;
  }
}
