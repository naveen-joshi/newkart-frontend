import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      const token = JSON.parse(atob(jwtToken.split('.')[1]));
      if (this._tokenExpired(token.exp)) {
        if (token.isAdmin) return true;
      }
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }

  private _tokenExpired(expiration): boolean {
    return Math.floor(new Date().getTime() / 1000) >= expiration
  }
}
