import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Cart, Convert } from '../models/cart.model';
import { AuthService } from './auth.service';

declare var Razorpay: any;
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

  isLoading = false;

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
    this.isLoading = true;
    if (this.authService.isLoggedIn()) {
      var userId = this.authService.getLoggedInUser()['_id'];
      this.httpClient
        .post(`${environment.host}/cart/${userId}`, {
          productId: productId,
        })
        .subscribe({
          next: (response: any) => {
            this.isLoading = false;
            if (response['status']) {
              this.cart = Convert.toCart(response['cart']);
              this.snackBar.open('Added to cart!', '', { duration: 2000 });
            } else {
              this.snackBar.open(response['message'], '', { duration: 2000 });
            }
          },
          error: (error: any) => {
            this.isLoading = false;
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
    this.isLoading = true;
    if (this.authService.isLoggedIn()) {
      var userId = this.authService.getLoggedInUser()['_id'];
      this.httpClient
        .patch(`${environment.host}/cart/${userId}`, {
          productId: productId,
        })
        .subscribe({
          next: (response: any) => {
            this.isLoading = false;
            if (response['status']) {
              this.cart = Convert.toCart(response['cart']);
              this.snackBar.open('Success!', '', { duration: 2000 });
            } else {
              this.snackBar.open(response['message'], '', { duration: 2000 });
            }
          },
          error: (error: any) => {
            this.isLoading = false;
            this.snackBar.open(error['error']['message'], '', {
              duration: 2000,
            });
          },
        });
    }
  }

  removeProductFromCart(productId: string) {
    this.isLoading = true;
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
              this.isLoading = false;
              this.cart = Convert.toCart(response['cart']);
              this.snackBar.open('Removed successfully!', '', {
                duration: 2000,
              });
            } else {
              this.snackBar.open(response['message'], '', { duration: 2000 });
            }
          },
          error: (error: any) => {
            this.isLoading = false;
            this.snackBar.open(error['error']['message'], '', {
              duration: 2000,
            });
          },
        });
    }
  }

  checkout() {
    var options = {
      key: 'rzp_test_B9HV2i8659WwkE',
      amount: Math.ceil(this.cart?.total! * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'PharmEasy',
      prefill: {
        name: this.authService.getLoggedInUser()['name'],
        email: this.authService.getLoggedInUser()['email'],
        contact: this.authService.getLoggedInUser()['phone'],
      },
      handler: (response: any) => {
        console.log('payment_id:', response.razorpay_payment_id);
      },
    };
    var rzp = new Razorpay(options);
    rzp.open();
    rzp.on('payment.failed', (response: any) =>
      this.snackBar.open(response.error.description, '', { duration: 2000 })
    );
  }
}
