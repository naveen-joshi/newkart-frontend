import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../admin/products/product.model';
import { Category } from './category.type';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public url = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }
  // products$: Observable<Product[]>;

  categories$ = this.http.get<Category[]>(this.url + 'categories')
    .pipe(map((category) => {
      return category;
    }))


  getCategory(id: string) {
    return this.http.get<Category>(`${this.url}categories/${id}`)
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.url}categories`, category)
  }

  deleteCategory(id: string): Observable<Object> {
    return this.http.delete<Object>(`${this.url}categories`);
  }

  getProductsByCategory(category?: string) {
    let params = new HttpParams();
    if (category) {
      params = params.append('category', category)
    }
    return this.http.get<Product[]>(this.url + 'products', { params: params })
      .pipe(map((product) => {
        console.log(product);
        return product;
      }))
  }
}
