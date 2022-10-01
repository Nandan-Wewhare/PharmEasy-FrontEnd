import { Component, Input, OnInit } from '@angular/core';
import { PortalReview } from 'src/app/models/portal_review.model';

@Component({
  selector: 'app-reviewcard',
  templateUrl: './reviewcard.component.html',
  styleUrls: ['./reviewcard.component.css'],
})
export class ReviewcardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  review!: PortalReview;
}
