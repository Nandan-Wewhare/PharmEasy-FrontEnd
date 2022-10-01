import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Convert, PortalReview } from 'src/app/models/portal_review.model';
import { environment } from 'src/environments/environment';
declare var $: any;
@Component({
  selector: 'app-reviewhome',
  templateUrl: './reviewhome.component.html',
  styleUrls: ['./reviewhome.component.css'],
})
export class ReviewhomeComponent implements OnInit {
  isLoading = false;

  reviews: PortalReview[] = [];

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    $(document).ready(() => {
      $('#autoPlayReviews').lightSlider({
        item: 4,
        auto: false,
        loop: false,
        pauseOnHover: true,
        speed: 500,
        pause: 2000,
      });
    });
    this.getAllReviews();
  }

  getAllReviews() {
    this.httpClient.get(`${environment.host}/reviews/portalReviews`).subscribe({
      next: (response: any) => {
        this.isLoading = true;
        if (response['status']) {
          response['portalReviews'].forEach((review: any) => {
            this.reviews.push(Convert.toPortalReview(review));
          });
        } else {
          this.snackBar.open(response['message'], '', { duration: 2000 });
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.snackBar.open(error['error']['message'], '', { duration: 2000 });
        this.isLoading = false;
      },
    });
  }
}
