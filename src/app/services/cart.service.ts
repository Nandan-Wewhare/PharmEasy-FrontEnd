import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Cart, Convert } from '../models/cart.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {}

  cart: Cart | null = null;

  getUserCart() {
    if (this.authService.isLoggedIn()) {
      var userId = this.authService.getLoggedInUser()['_id'];
      this.httpClient.get(`${environment.host}/cart/${userId}`).subscribe({
        next: (response: any) => {
          if (response['status']) {
            this.cart = Convert.toCart(response['cart']);
          } else {
            this.snackBar.open(response['message'], '', { duration: 2000 });
          }
        },
        error: (error: any) => {
          this.snackBar.open(error['error']['message'], '', { duration: 2000 });
        },
      });
    }
  }

  addToCart(productId: string) {
    if (this.authService.isLoggedIn()) {
      var userId = this.authService.getLoggedInUser()['_id'];
      this.httpClient
        .post(`${environment.host}/cart/${userId}`, {
          productId: productId,
        })
        .subscribe({
          next: (response: any) => {
            if (response['status']) {
              this.cart = Convert.toCart(response['cart']);
            } else {
              this.snackBar.open(response['message'], '', { duration: 2000 });
            }
          },
          error: (error: any) => {
            this.snackBar.open(error['error']['message'], '', {
              duration: 2000,
            });
          },
        });
    } else {
      this.snackBar.open('Please login to add product to cart', '', {
        duration: 2000,
      });
    }
  }

  decreaseQuantity(productId: string) {
    if (this.authService.isLoggedIn()) {
      var userId = this.authService.getLoggedInUser()['_id'];
      this.httpClient
        .patch(`${environment.host}/cart/${userId}`, {
          productId: productId,
        })
        .subscribe({
          next: (response: any) => {
            if (response['status']) {
              this.cart = Convert.toCart(response['cart']);
            } else {
              this.snackBar.open(response['message'], '', { duration: 2000 });
            }
          },
          error: (error: any) => {
            this.snackBar.open(error['error']['message'], '', {
              duration: 2000,
            });
          },
        });
    }
  }

  removeProductFromCart(productId: string) {
    if (this.authService.isLoggedIn()) {
      var userId = this.authService.getLoggedInUser()['_id'];
      this.httpClient
        .delete(`${environment.host}/cart/${userId}`, {
          body: {
            productId: productId,
          },
        })
        .subscribe({
          next: (response: any) => {
            if (response['status']) {
              this.cart = Convert.toCart(response['cart']);
            } else {
              this.snackBar.open(response['message'], '', { duration: 2000 });
            }
          },
          error: (error: any) => {
            this.snackBar.open(error['error']['message'], '', {
              duration: 2000,
            });
          },
        });
    }
  }
}
