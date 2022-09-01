import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviewcard',
  templateUrl: './reviewcard.component.html',
  styleUrls: ['./reviewcard.component.css'],
})
export class ReviewcardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  reviewer!: string;

  @Input() reviewDate!: Date;
  @Input() review!: string;
}
