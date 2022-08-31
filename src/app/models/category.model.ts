export class Category {
  __id: string;
  name: string;
  image: string;

  constructor(id: string, name: string, image: string) {
    this.__id = id;
    this.name = name;
    this.image = image;
  }
}
