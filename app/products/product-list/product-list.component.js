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
var ProductList = (function () {
    function ProductList() {
        this.products = [
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
            },
            {
                id: '2',
                name: 'Deepcool Steam Castle Micro ATX Black Gaming Cube Case',
                price: 64.99,
                description: 'Features' +
                    'With rubber buffer and dust filter for PSU' +
                    'Unique post-modern steam-punk style appearance, very impressive' +
                    'Side-window and top 4 turbo-type air out-taking holes,excellent for PC modding and gaming' +
                    'Large area of rubber painting (soft touch)' +
                    'Horizontal structure, perfect for top-performance or big-size air cooler installation, ensures a great cooling performance while keeps no extra vertical pressure to the motherboard',
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
                image: 'case.jpg',
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
            },
            {
                id: '3',
                name: 'ADATA SX930 480GB 2.5" SATA Solid State Drive (SSD) (ASX930SS3-480GM-C)',
                price: 189,
                description: 'Xtreme Performance Gear (XPG) is a brand of ADATA Technology offering the highest-performing computer peripheral products, and the XPG SX930 SATA 6Gb/s SSD is specifically for gamers and overclockers! It\'s equipped with a JMicron controller and Enterprise-grade MLC Plus NAND Flash for excellent performance and durability; therefore, it\'s not only suitable for gaming, but also ideal for workstation.',
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
                image: 'ssd.jpg',
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
            },
            {
                id: '4',
                name: 'WD 2TB Black My Passport Ultra Portable External Hard Drive - USB 3.0',
                price: 129.99,
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
                image: 'exdrive.jpg',
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
            },
            {
                id: '5',
                name: 'GIGABYTE GA-970A-D3P (rev. 1.0) Socket AM3+ AMD 970+SB950 Chipset | Dual Channel',
                price: 99.99,
                description: 'Supports AMD AM3+ FX / AM3 Phenom™ II, Athlon™ II series Processor GIGABYTE Ultra Durable™ 4 Classic Technology GIGABYTE Digital Power Engine GIGABYTE UEFI DualBIOS™ 2-way CrossFire™ Support VIA 2021 with High Quality 108dB SNR HD audio GIGABYTE On/Off Charge™ for USB devices 4 USB 3.0 ports with GIGABYTE 3X USB power 6 SATA3 ports with RAID support GbE LAN with high ESD Protection',
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
                image: 'mobo.jpg',
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
            }
        ];
    }
    ProductList = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: 'app/products/product-list/product-list.html',
            directives: [product_component_1.Product]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductList);
    return ProductList;
}());
exports.ProductList = ProductList;
//# sourceMappingURL=product-list.component.js.map