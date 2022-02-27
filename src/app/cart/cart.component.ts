import { Component, OnInit } from '@angular/core';
import { Product } from '../product.types';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public items: Product[] = [];
  public cartTotal: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.cartService.cartCount.subscribe((data) => {
      console.log(data);
    });
  }
}
