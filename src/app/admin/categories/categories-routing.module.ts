import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'update-category', component: UpdateCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
