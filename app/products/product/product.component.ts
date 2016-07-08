import { Component, Input } from '@angular/core';
import { ProductPanel } from '../product-panel/product-panel.component';

@Component({
    selector: 'product',
    templateUrl: 'app/products/product/product.html',
    directives: [ProductPanel],
    styleUrls: ['/product.css']
})

export class Product{
    @Input() product = {};

    toProductDetail(productId){
        location.href = '/product-detail/' + productId;
    }
}