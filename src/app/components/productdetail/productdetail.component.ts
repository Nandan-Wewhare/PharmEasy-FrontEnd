import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductdetailComponent implements OnInit {
  productId!: string;

  product: Product = new Product(
    '1',
    'Revital H Men Multivitamin With Calcium, Zinc & Ginseng For Immunity, Strong Bones & Energy (30 Capsules)',
    [
      'https://cdn01.pharmeasy.in/dam/products_otc/270552/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-capsules-2-1654077741.jpg?dim=320x320&dpr=1&q=100',
      'https://cdn01.pharmeasy.in/dam/products_otc/270552/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-capsules-3-1654078581.jpg',
      'https://cdn01.pharmeasy.in/dam/products_otc/270552/revital-h-health-supplement-capsules-bottle-of-30-6.5-1641398825.jpg',
    ],
    'Revital H capsule is a unique and balanced combination of 10 vitamins, 9 minerals and ginseng for your daily needs. It gives you the energy to perform your everyday activities, keeps you active and fit. There are variants of this product available that cater to specific needs like the Revital H Woman. Amidst our busy lifestyle, it is critical to keep our health on priority.',
    310,
    '2',
    15,
    3,
    'Saffola',
    'MARICO LIMITED Hembros Foods LLP, Plot No. 909, Sector 69, IMT Faridabad, Haryana, 121009 Lic No. 10019064001901'
  );

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productId = params['id'];
    });
  }
}