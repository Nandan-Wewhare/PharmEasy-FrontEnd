import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-authdialog',
  templateUrl: './authdialog.component.html',
  styleUrls: ['./authdialog.component.css'],
})
export class AuthdialogComponent implements OnInit {
  selectedIndex = 0;
  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<AuthdialogComponent>,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}
  changeTab(tabChange: MatTabChangeEvent) {
    this.selectedIndex = tabChange.index;
  }

  login(form: NgForm) {
    this.isLoading = true;
    this.authService.login(form.value.phone, form.value.pswd).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        if (response['status']) {
          this.authService.setLoginData(
            response['token'],
            JSON.stringify(response['user'])
          );
          this.dialogRef.close();
          this.snackBar.open('Logged in successfully!', '', { duration: 2000 });
          this.cartService.getUserCart();
        } else {
          this.snackBar.open(response['message'], '', { duration: 2000 });
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.snackBar.open(error['error']['message'], '', { duration: 2000 });
      },
    });
  }

  register(form: NgForm) {
    this.isLoading = true;
    if (form.value.pswd === form.value.cnfPswd) {
      this.authService.register(form.value.phone, form.value.pswd).subscribe({
        next: (response: any) => {
          this.isLoading = false;
          if (response['status']) {
            this.dialogRef.close();
            this.snackBar.open(
              'Registered successfully! Please login with your credentials now',
              '',
              {
                duration: 2000,
              }
            );
          } else {
            this.snackBar.open(response['message'], '', { duration: 2000 });
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.snackBar.open(error['error']['message'], '', { duration: 2000 });
        },
      });
    } else {
      this.isLoading = false;
      this.snackBar.open('Passwords are not matching', '', { duration: 2000 });
    }
  }
}
