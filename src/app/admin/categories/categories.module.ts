import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryListComponent,
    UpdateCategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  ]
})
export class CategoriesModule { }
