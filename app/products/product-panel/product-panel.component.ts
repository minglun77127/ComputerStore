import { Component, Input } from '@angular/core';

@Component({
    selector: 'product-panel',
    templateUrl: 'app/products/product-panel/product-panel.html'
})

export class ProductPanel {
    @Input() product = {};
    tab = 1; //set default tab;

    selectTab(tab, event){
        event.preventDefault();
        this.tab = tab;
    }
    isSelected(tab){
        return tab === this.tab;
    }
}