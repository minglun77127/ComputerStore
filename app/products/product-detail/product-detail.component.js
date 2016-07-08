"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_component_1 = require('../product/product.component');
var product_panel_component_1 = require('../product-panel/product-panel.component');
var ProductDetail = (function () {
    function ProductDetail() {
        this.product = {
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
    ProductDetail = __decorate([
        core_1.Component({
            selector: 'product-detail',
            templateUrl: 'app/products/product-detail/product-detail.html',
            directives: [product_component_1.Product, product_panel_component_1.ProductPanel]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductDetail);
    return ProductDetail;
}());
exports.ProductDetail = ProductDetail;
//# sourceMappingURL=product-detail.component.js.map