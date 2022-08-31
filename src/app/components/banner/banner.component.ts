import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  constructor() {}
  bannerLinks = [
    'https://cdn01.pharmeasy.in/dam/banner/banner/743f49db02f-GETTEST500_App.jpg',
    'https://cdn01.pharmeasy.in/dam/banner/banner/d5eb863aca1-surgicare-app.jpg',
    'https://cdn01.pharmeasy.in/dam/banner/banner/b038b49f68b-med_bills.jpg',
    'https://cdn01.pharmeasy.in/dam/banner/banner/29cf7cbba10-Liveasydiabeticslippers_1_App.jpg',
  ];
  ngOnInit(): void {
    $(document).ready(() => {
      var autoplaySlider = $('#autoplay').lightSlider({
        auto: true,
        loop: true,
        pauseOnHover: true,
        speed: 400,
        pause: 2000,
        onBeforeSlide: (el: any) => {
          $('#current').text(el.getCurrentSlideCount());
        },
      });
      $('#total').text(autoplaySlider.getTotalSlideCount());
    });
  }
}
