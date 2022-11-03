import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}
  name!: string;
  email!: string;
  phone!: string;

  loading = false;

  ngOnInit(): void {
    var user = this.authService.getLoggedInUser();
    this.name = user['name'];
    this.email = user['email'];
    this.phone = user['phone'];
  }

  updateUser() {
    this.loading = true;
    this.authService.updateUser(this.name, this.email, this.phone).subscribe({
      next: (response: any) => {
        if (response['status']) {
          this.loading = false;
          this.authService.setLoginData(
            response['token'],
            JSON.stringify(response['user'])
          );
          this.snackBar.open('Updated successfully!', '', { duration: 2000 });
        } else {
          this.snackBar.open(response['message'], '', { duration: 2000 });
        }
      },
      error: (error: any) => {
        this.loading = false;
        this.snackBar.open(error['error']['message'], '', { duration: 2000 });
      },
    });
  }
}
