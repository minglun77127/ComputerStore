import { Component } from '@angular/core';
import { Product } from '../product/product.component';
import { ProductPanel } from '../product-panel/product-panel.component';

@Component({
    selector: 'product-detail',
    templateUrl: 'app/products/product-detail/product-detail.html',
    directives: [Product, ProductPanel]
})

export class ProductDetail {
    product =
        {
            id: '1',
            name: 'Logitech (981-000541) G230 Stereo Gaming Headset',
            price: 34.99,
            description: 'G230 delivers high-quality stereo sound to keep you immersed in your game from start to finish with earpieces designed to be slim and light, without skimping on audio quality. We covered the G230 ear cups with carefully selected sports performance cloth for a comfortable, soft touch even after hours of use.',
            specification: [
                {
                    name: 'Type',
                    value: 'Desktop'
                },
                {
                    name: 'Brand',
                    value: 'Gigabyte'
                },
                {
                    name: 'Socket',
                    value: 'AMD AM3+'
                },
                {
                    name: 'Chipset',
                    value: 'North Bridge: AMD 970, South Bridge: AMD SB950'
                }
            ],
            image: 'headset.jpg',
            reviews: [
                {
                    stars: 1,
                    comment: 'its soso',
                    author: 'minglun77127@gmail.com'
                },
                {
                    stars: 3,
                    comment: 'its good',
                    author: 'minglun77128@gmail.com'
                }
            ]
        };
}