import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pincodedialog',
  templateUrl: './pincodedialog.component.html',
  styleUrls: ['./pincodedialog.component.css'],
})
export class PincodedialogComponent implements OnInit {
  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<PincodedialogComponent>,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {}

  checkPincode(pincode: string) {
    this.isLoading = true;
    this.httpClient
      .get(`${environment.host}/misc/checkDelivery/${pincode}`)
      .subscribe({
        next: (response: any) => {
          this.isLoading = false;
          if (!response['status'])
            this.snackBar.open(response['message'], '', { duration: 2000 });
          else {
            this.snackBar.open(
              `Express delivery at ${pincode} possible by ${this.datePipe.transform(
                response['data']['deliveryBy'],
                'longDate'
              )}!`,
              '',
              { duration: 4000 }
            );
          }
        },
        error: (error: any) => {
          this.isLoading = false;
          this.snackBar.open(error['error']['message'], '', { duration: 2000 });
        },
      });
  }
}
