import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-reviewhome',
  templateUrl: './reviewhome.component.html',
  styleUrls: ['./reviewhome.component.css'],
})
export class ReviewhomeComponent implements OnInit {
  reviews = [
    {
      reviewer: 'Rajarshi Sarkar',
      reviewDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      review:
        'The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.',
    },
    {
      reviewer: 'Darpan Dholakia',
      reviewDate: new Date(Date.now() - 16 * 24 * 60 * 60 * 1000),
      review:
        'Best service and app amongst all available. I have been using it for more than 3 years, and even during the pandemic, they have kept their standards high and are delivering the order within 24 hours. Keep up the good work.',
    },
    {
      reviewer: 'Lipi Chaudhuri',
      reviewDate: new Date(Date.now() - 39 * 24 * 60 * 60 * 1000),
      review:
        'This app is a game changer for me. I am unable to go out always to buy medicinal products. Pharmeasy gives me the last liberty to shop essential healthcare products from home. The app is very user friendly and me being an elderly person do not find any difficulty in using it. They deliver well in time. Thanks😊',
    },
    {
      reviewer: 'Tirthankar Das Purkayastha',
      reviewDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      review:
        'Very good app. Would recommend it to everyone requiring fast and efficient delivery of medicinal products at the doorstep.',
    },
    {
      reviewer: 'Debanjan Roy',
      reviewDate: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000),
      review:
        "Excellent experience. Pharmeasy has not let it's customers down during lockdown. Thanks team. Great job. The application is also very smooth. And does its job well with an attractive UI and easy to use features. Good job developer.",
    },
    {
      reviewer: 'Rohini Sarkar',
      reviewDate: new Date(Date.now() - 55 * 24 * 60 * 60 * 1000),
      review:
        'Very helpful and friendly app in terms of usability, customer support & money saving from the point of medical necessity of every person.',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    $(document).ready(() => {
      var autoplaySlider = $('#autoPlayReviews').lightSlider({
        item: 4,
        auto: false,
        loop: false,
        pauseOnHover: true,
        speed: 500,
        pause: 2000,
        onBeforeSlide: (el: any) => {
          $('#current').text(el.getCurrentSlideCount());
        },
      });
      $('#total').text(autoplaySlider.getTotalSlideCount());
    });
  }
}
