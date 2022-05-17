import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../admin/products/product.model';
import { CategoryService } from '../home/category.service';
import { Category } from '../home/category.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: Product[];
  public category = '';
  public categoryName = '';
  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }
  // products$ = this.categoryService.products$;
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.category = params['category'];
      })

    this.categoryService.getCategory(this.category).subscribe((data: Category) => {
      this.categoryName = data.name;
    })
    this.categoryService.getProductsByCategory(this.category).subscribe((data: Product[]) => {
      this.products = data
    })
  }

}
