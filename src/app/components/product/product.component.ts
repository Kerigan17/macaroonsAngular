import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {CartProductService} from "../../services/cart-product.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [CartProductService]
})
export class ProductComponent {

  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor() {
    this.product = {
      image: '',
      title: '',
      price: 0
    }
  }

  ngOnInit(): void {}

  addProductToCart(product: ProductType) :void {
    this.addToCartEvent.emit(product);
    alert(`${product.title} добавлен в корзину`);
  }
}
