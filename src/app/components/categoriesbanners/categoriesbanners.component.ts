import { Component, OnInit } from '@angular/core';
import { Category, Convert } from 'src/app/models/category.model';
declare var $: any;

@Component({
  selector: 'app-categoriesbanners',
  templateUrl: './categoriesbanners.component.html',
  styleUrls: ['./categoriesbanners.component.css'],
})
export class CategoriesbannersComponent implements OnInit {
  categories: Category[] = [];
  isLoading = false;
  constructor() {}

  ngOnInit(): void {
    $(document).ready(() => {
      $('#autoplayCategories').lightSlider({
        item: 6,
        auto: false,
        loop: false,
        pauseOnHover: true,
        speed: 500,
        pause: 2000,
      });
    });
    this.getAllCategories();
  }

  getAllCategories() {
    var tempCategories = [
      {
        _id: '63202c8d83bd5c7dc73b8f78',
        name: 'Personal Care',
        image:
          'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9f446c0e74273d70b0baf85e4ff0f76a.png?f=png?dim=256x0',
      },
      {
        _id: '63202c8d83bd5c7dc73b8f79',
        name: 'Skin Care',
        image:
          'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9b3ad6971475304e9e1614ac30d4545a.png?f=png?dim=256x0',
      },
      {
        _id: '63202d5da7249992381c9959',
        name: 'Health food and drinks',
        image:
          'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/aace6d1f0dc03f1f8c6e26dd880e1934.png?f=png?dim=256x0',
      },
    ];
    tempCategories.forEach((category) =>
      this.categories.push(Convert.toCategory(category))
    );
  }
}
