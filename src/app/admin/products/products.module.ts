import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    ViewProductComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, MatButtonModule],
})
export class ProductsModule {}
