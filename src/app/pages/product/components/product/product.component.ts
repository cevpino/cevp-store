
import { Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit } from '@angular/core';

import { Product } from '../../../../model/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnChanges, OnInit {

    @Input()
    product!: Product;

    @Output()
    productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor() {
        console.log('1. constructor');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('2. ngOnChanges');
        console.log(changes);
    }

    ngOnInit(): void {
        console.log('3. ngOnInit');
    }

    addCart(): void {
        console.log('Añadir al carrito');
        this.productClicked.emit(this.product.id);
    }
}
