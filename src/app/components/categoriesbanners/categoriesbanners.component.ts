import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
declare var $: any;

@Component({
  selector: 'app-categoriesbanners',
  templateUrl: './categoriesbanners.component.html',
  styleUrls: ['./categoriesbanners.component.css'],
})
export class CategoriesbannersComponent implements OnInit {
  constructor() {}
  categories: Category[] = [
    new Category(
      '1',
      'Personal Care',
      'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9f446c0e74273d70b0baf85e4ff0f76a.png?f=png?dim=256x0'
    ),
    new Category(
      '2',
      'Skin Care',
      'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9b3ad6971475304e9e1614ac30d4545a.png?f=png?dim=256x0'
    ),
    new Category(
      '3',
      'Health food and drinks',
      'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/aace6d1f0dc03f1f8c6e26dd880e1934.png?f=png?dim=256x0'
    ),
    new Category(
      '4',
      'Covid Essentials',
      'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=256x0'
    ),
    new Category(
      '5',
      'Beauty',
      'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/3c7ab4d29c6631f7a5cb7eafd3bfbc79.png?f=png?dim=256x0'
    ),
    new Category(
      '6',
      'Home Care',
      'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0'
    ),
    new Category(
      '7',
      'Ayurvedic Care',
      'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=256x0'
    ),
    new Category(
      '8',
      'Fitness supplements',
      'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cf0c849550a38109738815b3fc2fac6.png?f=png?dim=256x0'
    ),
    new Category(
      '9',
      'Elderly Care',
      'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/2d8f0b5c034735a08ff13325d72bafbe.png?f=png?dim=256x0'
    ),
  ];
  ngOnInit(): void {
    $(document).ready(() => {
      var autoplaySlider = $('#autoplayCategories').lightSlider({
        item: 6,
        auto: false,
        loop: true,
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
