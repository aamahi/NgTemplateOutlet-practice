import { Component } from '@angular/core';
import {Product} from "../common.interface";

@Component({
  selector: 'app-app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.scss']
})

export class AppProductComponent {
  public productDemo: Product = {
    productName: 'Example Product',
    image: 'https://www.dropbox.com/s/e928cht0h5crcn4/shoe.png?raw=1',
    size: ['38', '40', '42', '44'],
    price: 29.99,
    discountPrice: 24.99,
    category: 'Sports',
    brand: 'Apex'
  };
}
