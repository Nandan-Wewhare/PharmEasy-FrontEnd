import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getAllOrders() {
    var userId = this.authService.getLoggedInUser()['_id'];
    return this.httpClient.get(`${environment.host}/orders/${userId}`);
  }

  cancelOrder(orderId: string) {
    return this.httpClient.patch(`${environment.host}/orders/${orderId}`, {});
  }
}
