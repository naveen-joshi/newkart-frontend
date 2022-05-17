import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent, UserInfo } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

import { LatestComponent } from './latest/latest.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './authentication/login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { ProfileModule } from './profile/profile.module';
import { CookieService } from 'ngx-cookie-service';
import { AuthHttpInterceptor } from './authentication/service/auth-http.interceptor';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserInfo,
    HeaderComponent,
    LatestComponent,
    SearchComponent,
    CartComponent,
    ProductDetailsComponent,
    SearchResultsComponent,
    ProductsComponent,
    // LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ProfileModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
