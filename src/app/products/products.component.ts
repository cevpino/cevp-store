import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      title: 'Camiseta',
      price: 25,
      image: 'assets/images/camiseta.png',
      descripcion: 'Playera 1'
    },
    {
      id: '2',
      title: 'Hoodie',
      price: 50,
      image: 'assets/images/hoodie.png',
      descripcion: 'Hoodie'
    },
    {
      id: '3',
      title: 'Mug',
      price: 40,
      image: 'assets/images/mug.png',
      descripcion: 'Es un Mug'
    },
    {
      id: '4',
      title: 'Pin',
      price: 75,
      image: 'assets/images/pin.png',
      descripcion: 'Pin'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  clickProduct(id: number): void {
    console.log('product');
    console.log(id);
  }
}
