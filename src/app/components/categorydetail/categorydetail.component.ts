import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Convert, Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categorydetail',
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.css'],
})
export class CategorydetailComponent implements OnInit {
  categoryId!: string;
  categoryName!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.categoryId = params['id'];
    });
    this.getProductsInCategory();
  }

  productsInCategory: Product[] = [];
  sortedProducts: Product[] = [];

  sortOptions: string[] = [
    'Discount',
    'Price low to high',
    'Price high to low',
  ];

  getProductsInCategory() {
    this.httpClient
      .get(
        `${environment.host}/products/getProductsInCategory/${this.categoryId}`
      )
      .subscribe({
        next: (response: any) => {
          if (response['status']) {
            this.categoryName = response['category'];
            response['products'].forEach((product: any) => {
              this.productsInCategory.push(Convert.toProduct(product));
            });
            this.sortedProducts = this.productsInCategory;
          } else {
            this.snackBar.open(response['message'], '', { duration: 2000 });
          }
        },
        error: (error) =>
          this.snackBar.open(error['error']['message'], '', { duration: 2000 }),
      });
  }

  sortProducts(option: string, event: any) {
    if (event.isUserInput) {
      // to disable calling onSelectionChange twice - for selection and deselection
      this.sortedProducts = this.productsInCategory;
      switch (option) {
        case 'Price high to low':
          this.sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case 'Price low to high':
          this.sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case 'Discount':
          this.sortedProducts.sort((a, b) => b.discount - a.discount);
          break;
      }
    }
  }
}
