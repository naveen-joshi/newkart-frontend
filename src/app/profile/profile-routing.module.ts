import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes: Routes = [
  {
    path: '', component: ProfileComponent, children: [
      { path: '', redirectTo: 'personal-details', pathMatch: 'full' },
      { path: 'personal-details', component: PersonalDetailsComponent },
      { path: 'manage-address', component: AddressDetailsComponent },
      { path: 'manage-payment', component: PaymentDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
