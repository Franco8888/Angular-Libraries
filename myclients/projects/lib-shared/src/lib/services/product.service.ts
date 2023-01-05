import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getMyProduct() {
    const prod = new Product('1', 'Samsung S400', 6700, 'Its a phone', 20);
    return prod;
  }
}
