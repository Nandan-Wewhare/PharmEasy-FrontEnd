import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Convert, Product } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductdetailComponent implements OnInit {
  productId!: string;

  product!: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private snackBar: MatSnackBar,
    public authService: AuthService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productId = params['id'];
    });
    this.getProductDetail();
  }

  getProductDetail() {
    this.productService.getProductDetail(this.productId).subscribe({
      next: (response: any) => {
        if (response['status'])
          this.product = Convert.toProduct(response['product']);
        else this.snackBar.open(response['message'], '', { duration: 2000 });
      },
      error: (error) =>
        this.snackBar.open(error['error']['message'], '', { duration: 2000 }),
    });
  }
}
