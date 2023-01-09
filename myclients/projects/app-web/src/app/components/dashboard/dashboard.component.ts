import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'lib-shared';

@Component({
  selector: 'web-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    buttonPressed = false;

    myProduct!: Product;    // using model from library

    // using service from library
    constructor(
        private productService: ProductService
        ) {

    }
    ngOnInit() {
        this.myProduct = this.productService.getMyProduct();
    }

    myFunc() {
        this.buttonPressed = !this.buttonPressed;
    }
}
