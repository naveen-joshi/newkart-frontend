import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../types/user.types';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public API_URL = 'http://localhost:8000/api/users';
  public isLoggedIn = new BehaviorSubject(false);

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public registerUser(userData: User) {
    return this.http.post(this.API_URL, userData);
  }

  public loginUser(email: string, password: string) {
    return this.http.post<User>(`${this.API_URL}/login`, { email, password });
  }

  public logout() {
    this.cookieService.delete('loggedIn');
    localStorage.removeItem('jwtToken');
  }
}
