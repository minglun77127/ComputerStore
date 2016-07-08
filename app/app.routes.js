"use strict";
var router_1 = require('@angular/router');
var product_list_component_1 = require('./products/product-list/product-list.component');
var product_detail_component_1 = require('./products/product-detail/product-detail.component');
exports.routes = [
    { path: 'product-list', component: product_list_component_1.ProductList },
    { path: 'product-detail/:id', component: product_detail_component_1.ProductDetail }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map