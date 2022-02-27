import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../product.types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public items: Product[] = [];

  public cartCount = new EventEmitter<number>();

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  addToCart(product: Product) {
    this.items.push(product);
    this.openSnackBar(
      `${product.pname} has been added to cart successfully`,
      'Dismiss'
    );
    this.cartCount.emit(this.items.length);
  }
  getItems() {
    return this.items;
  }
  clearAll() {
    this.items = [];
    return this.items;
  }
}
