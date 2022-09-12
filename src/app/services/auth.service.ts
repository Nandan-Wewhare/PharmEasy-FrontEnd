import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(phone: string, password: string) {
    return this.httpClient.post(`${environment.host}/login`, {
      phone: phone,
      password: password,
    });
  }

  register(phone: string, password: string) {
    return this.httpClient.post(`${environment.host}/register`, {
      phone: phone,
      password: password,
    });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(Constants.AUTH_TOKEN) != null;
  }

  logout(): void {
    localStorage.removeItem(Constants.AUTH_TOKEN);
  }
}
