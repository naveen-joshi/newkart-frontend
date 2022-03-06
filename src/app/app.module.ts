import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent, UserInfo } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LatestComponent } from './latest/latest.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { SearchComponent } from './search/search.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CartComponent } from './cart/cart.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { ProfileModule } from './profile/profile.module';
import { CookieService } from 'ngx-cookie-service';
import { AuthHttpInterceptor } from './auth-http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserInfo,
    HeaderComponent,
    LatestComponent,
    SearchComponent,
    CartComponent,
    LoginComponent,
    ProductDetailsComponent,
    SearchResultsComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    ProfileModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
