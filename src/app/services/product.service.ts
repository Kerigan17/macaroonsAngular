import { Injectable } from '@angular/core';
import { ProductType } from "../types/product.type";

@Injectable()

export class ProductService {
  constructor() { }
  getProducts(): ProductType[] {
    return [
      {
        image: '1.png',
        title: 'Макарун с малиной',
        price: 1.7
      },
      {
        image: '2.png',
        title: 'Макарун с манго',
        price: 1.45
      },
      {
        image: '3.png',
        title: 'Пирог с ванилью',
        price: 2.7
      },
      {
        image: '4.png',
        title: 'Пирог с фисташками',
        price: 2.85
      }
    ]
  }
}
