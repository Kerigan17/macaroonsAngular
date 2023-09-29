import { Component } from '@angular/core';
import { ProductType } from "./types/product.type";
import { DescriptionType } from "./types/description.type";
import { ProductService } from "./services/product.service";
import { CartService } from "./services/cart.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public myPhone: number = 0;
  public showPresent: boolean = true;
  public products: ProductType[] = [];
  public descriptions: DescriptionType[]  = [
    {
      title: 'Лучшие продукты',
      textInfo: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      textInfo: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      textInfo: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      textInfo: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ];
  public formValues: {productTitle: string, name: string, phone: string} = {
    productTitle: '',
    name: '',
    phone: ''
  }
  public footerValues: {instagram: string, phone: string} = {
    instagram:  'macaroons.com',
    phone: '375293689868'
  }

  constructor(private ProductService: ProductService,
              public cartService: CartService) {}

  ngOnInit() {
    this.products = this.ProductService.getProducts();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'})
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
    this.cartService.count += product.price;
    this.cartService.amount++;
  }

  orderForm(siForm: NgForm): void {
    if (siForm.valid) {
      console.log('Заказ оформлен');
    }

    if (!this.formValues.productTitle) {
      alert('Выберите продукт');
      return;
    }
    if (!this.formValues.name) {
      alert('Введите ваше имя');
      return;
    }
    if (!this.formValues.phone) {
      alert('Введите ваш телефон');
      return;
    }

    alert('Заказ оформлен!')

    this.formValues = {
      productTitle: '',
      name: '',
      phone: ''
    }
  }
}
