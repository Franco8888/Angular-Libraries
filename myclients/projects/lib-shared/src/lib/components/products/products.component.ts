import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'shared-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    prod: Product | null | undefined;
    myBool = true;
    myClass = 'myClass';

    constructor(private productService: ProductService) {

    }

    ngOnInit(): void {
        this.prod = this.productService.getMyProduct();
    }

}
