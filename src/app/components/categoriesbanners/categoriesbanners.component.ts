import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category, Convert } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/categoryservice.service';
declare var $: any;

@Component({
  selector: 'app-categoriesbanners',
  templateUrl: './categoriesbanners.component.html',
  styleUrls: ['./categoriesbanners.component.css'],
})
export class CategoriesbannersComponent implements OnInit {
  categories: Category[] = [];
  isLoading = false;
  constructor(
    private categoryService: CategoryService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
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
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (response: any) => {
        this.isLoading = true;
        if (response['status']) {
          response['categories'].forEach((category: any) => {
            this.categories.push(Convert.toCategory(category));
          });
        } else {
          this.snackBar.open(response['message'], '', { duration: 2000 });
        }
        console.log(this.categories);
        this.isLoading = false;
      },
      error: (error) => {
        this.snackBar.open(error['error']['message'], '', { duration: 2000 });
        this.isLoading = false;
      },
    });
  }
}
