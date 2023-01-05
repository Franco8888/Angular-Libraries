import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'shared-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    prod: Product | null | undefined;

    constructor(private productService: ProductService) {

    }

    ngOnInit(): void {
        this.prod = this.productService.getMyProduct();
    }

}
