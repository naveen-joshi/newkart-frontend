import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { CardNumberFormatPipe } from './payment-details/card-number-format.pipe';


@NgModule({
  declarations: [
    PersonalDetailsComponent,
    PaymentDetailsComponent,
    AddressDetailsComponent,
    WishlistComponent,
    ProfileComponent,
    CardNumberFormatPipe
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
