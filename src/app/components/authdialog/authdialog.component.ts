import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Constants } from 'src/app/constants';
import { AuthService } from 'src/app/services/auth.service';

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
    private snackBar: MatSnackBar
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
          localStorage.setItem(Constants.AUTH_TOKEN, response['token']);
        } else {
          this.snackBar.open(response['message'], '', { duration: 2000 });
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error);
      },
    });
  }

  register(form: NgForm) {
    this.isLoading = true;
    this.authService.register(form.value.phone, form.value.pswd).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        if (response['status']) {
          localStorage.setItem(Constants.AUTH_TOKEN, response['token']);
        } else {
          this.snackBar.open(response['message'], '', { duration: 2000 });
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error);
      },
    });
  }
}
