import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category-tile',
  templateUrl: './category-tile.component.html',
  styleUrls: ['./category-tile.component.css'],
})
export class CategoryTileComponent implements OnInit {
  @Input()
  category!: Category;
  constructor() {}

  ngOnInit(): void {}
}
