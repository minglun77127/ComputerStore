import { provideRouter, RouterConfig } from '@angular/router';
import { ProductList } from  './products/product-list/product-list.component';
import {ProductDetail } from './products/product-detail/product-detail.component';

export const routes: RouterConfig = [
    { path: 'product-list', component: ProductList },
    { path: 'product-detail/:id', component: ProductDetail }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];