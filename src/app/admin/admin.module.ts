import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [AdminComponent, DashboardComponent, SideNavComponent],
  imports: [CommonModule, AdminRoutingModule, MatButtonModule, MatIconModule],
})
export class AdminModule {}
