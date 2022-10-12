import { Component, OnInit } from '@angular/core';
import { Convert, PortalReview } from 'src/app/models/portal_review.model';
declare var $: any;
@Component({
  selector: 'app-reviewhome',
  templateUrl: './reviewhome.component.html',
  styleUrls: ['./reviewhome.component.css'],
})
export class ReviewhomeComponent implements OnInit {
  isLoading = false;

  reviews: PortalReview[] = [];

  constructor() {}

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
    var hardCodedReviews = [
      {
        _id: '6322a8fc64971f22f2f5be2e',
        reviewer: {
          _id: '634246812e4fefe8c439ce16',
          name: '',
          email: '',
          passwordHash:
            '$2a$10$ILZSeGmkXtmTs3UABpTGpe6AfZCQq5FS4pPfX57qdMzLHfkWeTps.',
          phone: '7790890603',
          address: '',
          zip: '',
        },
        review:
          'Pharmeasy is one of the leaders in the natural health field. I have been using the company for years and find their products to be of the highest quality. I have purchased all their products and would recommend them to anyone. From one natural health advocate to another, I would suggest you check it out.',
        createdAt: '2022-09-15T04:23:39.547Z',
      },
      {
        _id: '63214c5f43b18b88378d319a',
        reviewer: {
          _id: '634246812e4fefe8c439ce16',
          name: '',
          email: '',
          passwordHash:
            '$2a$10$ILZSeGmkXtmTs3UABpTGpe6AfZCQq5FS4pPfX57qdMzLHfkWeTps.',
          phone: '7790890603',
          address: '',
          zip: '',
        },
        review:
          'Pharmeasy is one of the leaders in the natural health field. I have been using the company for years and find their products to be of the highest quality. I have purchased all their products and would recommend them to anyone. From one natural health advocate to another, I would suggest you check it out.',
        createdAt: '2022-09-14T03:34:36.984Z',
      },
      {
        _id: '63214c5f43b18b88378d319c',
        reviewer: {
          _id: '634246812e4fefe8c439ce16',
          name: '',
          email: '',
          passwordHash:
            '$2a$10$ILZSeGmkXtmTs3UABpTGpe6AfZCQq5FS4pPfX57qdMzLHfkWeTps.',
          phone: '7790890603',
          address: '',
          zip: '',
        },
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et erat sapien. Nullam ornare nibh ut sem suscipit',
        createdAt: '2022-09-14T03:34:36.984Z',
      },
      {
        _id: '63214c5f43b18b88378d319d',
        reviewer: {
          _id: '634246812e4fefe8c439ce16',
          name: '',
          email: '',
          passwordHash:
            '$2a$10$ILZSeGmkXtmTs3UABpTGpe6AfZCQq5FS4pPfX57qdMzLHfkWeTps.',
          phone: '7790890603',
          address: '',
          zip: '',
        },
        review:
          'Nulla eget placerat ligula, ut pellentesque magna. Sed quis placerat nisi. Quisque dictum augue ultrices quam ultrices. In placerat neque metus, id blandit arcu imperdiet ut. Cras ut rutrum nisi, eget vehicula dolor. Suspendisse et co',
        createdAt: '2022-09-14T03:34:36.984Z',
      },
      {
        _id: '63214c5f43b18b88378d319b',
        reviewer: {
          _id: '634246812e4fefe8c439ce16',
          name: '',
          email: '',
          passwordHash:
            '$2a$10$ILZSeGmkXtmTs3UABpTGpe6AfZCQq5FS4pPfX57qdMzLHfkWeTps.',
          phone: '7790890603',
          address: '',
          zip: '',
        },
        review:
          'This is my first time writing a review for any products. As a new user to the website I hope I can help others by sharing my views on the Pharmeasy product. I feel it is easy to use and has numerous functions. I have been using it for a week now and I have managed to get it set up and using it',
        createdAt: '2022-09-14T03:34:36.984Z',
      },
      {
        _id: '63214c5f43b18b88378d319e',
        reviewer: {
          _id: '634246812e4fefe8c439ce16',
          name: '',
          email: '',
          passwordHash:
            '$2a$10$ILZSeGmkXtmTs3UABpTGpe6AfZCQq5FS4pPfX57qdMzLHfkWeTps.',
          phone: '7790890603',
          address: '',
          zip: '',
        },
        review:
          'Aenean ultricies elit at quam porttitor viverra. In venenatis ac dui eget semper. Phasellus nec arcu sit amet nisi tempus consequat ex viverra vel.',
        createdAt: '2022-09-14T03:34:36.984Z',
      },
    ];
    hardCodedReviews.forEach((review) =>
      this.reviews.push(Convert.toPortalReview(review))
    );
  }
}
