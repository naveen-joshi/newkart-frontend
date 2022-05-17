import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orders = [
    {
      productId: 1,
      productName: 'Apple',
      price: 90000,
      deliveryStatus: {
        order_date: '16-04-2022',
        status: 'delivered'
      },
      delivered: {
        delivery_date: '20-04-2022',
        address: 'ABC Complex'
      },
      product_img: 'assets/img/4.jpg',
      seller: 'XYZ Seller'
    },
    {
      productId: 2,
      productName: 'Xioami',
      price: 20000,
      deliveryStatus: {
        order_date: '16-04-2022',
        status: 'delivered'
      },
      delivered: {
        delivery_date: '20-04-2022',
        address: 'ABC Complex'
      },
      product_img: 'assets/img/4.jpg',
      seller: 'XYZ Seller'
    },
    {
      productId: 3,
      productName: 'OnePlus',
      price: 30000,
      deliveryStatus: {
        order_date: '16-04-2022',
        status: 'delivered'
      },
      delivered: {
        delivery_date: '20-04-2022',
        address: 'ABC Complex'
      },
      product_img: 'assets/img/4.jpg',
      seller: 'XYZ Seller'
    },
    {
      productId: 4,
      productName: 'Samsung',
      price: 80000,
      deliveryStatus: {
        order_date: '16-04-2022',
        status: 'delivered'
      },
      delivered: {
        delivery_date: '20-04-2022',
        address: 'ABC Complex'
      },
      product_img: 'assets/img/4.jpg',
      seller: 'XYZ Seller'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
