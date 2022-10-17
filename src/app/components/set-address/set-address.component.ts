import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-set-address',
  templateUrl: './set-address.component.html',
  styleUrls: ['./set-address.component.css'],
})
export class SetAddressComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SetAddressComponent>,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  isLoading = false;

  updateAddress(form: NgForm) {
    this.isLoading = true;
    this.authService
      .updateAddress(form.value.address, form.value.pincode)
      .subscribe({
        next: (response: any) => {
          this.isLoading = false;
          if (response['status']) {
            this.authService.setLoginData(
              response['token'],
              JSON.stringify(response['user'])
            );
            this.dialogRef.close();
            this.snackBar.open('Address updated successfully!', '', {
              duration: 2000,
            });
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
}
