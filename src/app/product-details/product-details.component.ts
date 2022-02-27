import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}
  public param = '';
  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.params['id'];
  }
}
