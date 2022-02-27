import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../cart/cart.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public value = '';
  public isLoggedIn = false;
  public cartCount = 0;
  public username = '';
  constructor(private cartService: CartService, public dialog: MatDialog) {}

  ngOnInit(): void {
    let user = localStorage.getItem('User') as string;
    if (user) {
      this.isLoggedIn = true;
    }
    this.username = JSON.parse(user).name;
    this.cartService.cartCount.subscribe((data) => {
      this.cartCount = data;
    });
  }
  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: { isLoggedIn: this.isLoggedIn },
      disableClose: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.isLoggedIn = result;
    });
  }

  onLogout() {
    this.isLoggedIn = false;
    localStorage.removeItem('User');
  }
}
