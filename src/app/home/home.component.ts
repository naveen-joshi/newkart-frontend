import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../cart/cart.service';
import { Product } from '../product.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public homeCards = [
    {
      id: 1,
      title: 'Hot Deals',
      products: [
        { pid: 1, pname: 'test1' },
        { pid: 2, pname: 'test2' },
        { pid: 3, pname: 'test3' },
        { pid: 4, pname: 'test1' },
        { pid: 5, pname: 'test2' },
      ],
    },
    {
      id: 2,
      title: 'Deal of the day',
      products: [
        { pid: 1, pname: 'test1' },
        { pid: 2, pname: 'test2' },
        { pid: 3, pname: 'test3' },
        { pid: 4, pname: 'test1' },
        { pid: 5, pname: 'test2' },
      ],
    },
  ];

  constructor(public dialog: MatDialog, private cartService: CartService) {}

  ngOnInit(): void {
    const dialogRef = this.dialog.open(UserInfo);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public navigateToCategory(id: number) {
    console.log(id);
  }

  public onAddCart(product: Product) {
    this.cartService.addToCart(product);
  }

  public onBuyNow(product: any) {
    console.log(product);
  }
}

@Component({
  selector: 'userInfo',
  templateUrl: 'userInfo.html',
})
export class UserInfo {}
