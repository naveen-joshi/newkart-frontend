import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [
    PersonalDetailsComponent,
    OrdersComponent,
    PaymentDetailsComponent,
    AddressDetailsComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
