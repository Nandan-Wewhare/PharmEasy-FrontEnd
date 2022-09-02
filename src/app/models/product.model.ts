export class Product {
  __id: string;
  name: string;
  images: string[];
  description: string;
  price: number;
  categoryId: string;
  discount: number;
  avgRating: number;

  constructor(
    id: string,
    name: string,
    images: string[],
    description: string,
    price: number,
    categoryId: string,
    discount: number,
    avgRating: number
  ) {
    this.__id = id;
    this.name = name;
    this.images = images;
    this.description = description;
    this.price = price;
    this.categoryId = categoryId;
    this.discount = discount;
    this.avgRating = avgRating;
  }
}
