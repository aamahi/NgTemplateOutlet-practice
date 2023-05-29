import { Component } from '@angular/core';
import {Product} from "../common.interface";

@Component({
  selector: 'app-app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.scss']
})

export class AppProductComponent {
  public product: Product = {
    productName: 'Example Product',
    image: 'path/to/image.jpg',
    size: ['S', 'M', 'L'],
    price: 29.99,
    discountPrice: 24.99,
    category: 'Clothing',
    brand: 'Example Brand'
  };
}
