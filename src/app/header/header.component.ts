import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { AuthService } from '../authentication/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public value = '';
  public isLoggedIn = false;
  public isAdmin = false;
  public cartCount = 0;
  public username = '';
  constructor(
    private cartService: CartService,
    private router: Router,
    private authService: AuthService,
    public changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((data) => {
      this.isLoggedIn = data;
    })
    let user = localStorage.getItem('jwtToken') as string;
    if (user) {
      this.isLoggedIn = true;
    }

    this.cartService.cartCount.subscribe((data) => {
      this.cartCount = data;
    });
  }

  ngOnChanges() {
    this.changeDetector.detectChanges();
  }

  onLogout() {
    this.authService.logout();
    this.authService.isLoggedIn.next(false);
    this.router.navigate(['/']);
  }
}
