import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/home/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  constructor(public categoryService: CategoryService) { }
  categories$ = this.categoryService.categories$;

  ngOnInit(): void {
  }

  public deleteCategory(index) {
    console.log(index);
  }

}
