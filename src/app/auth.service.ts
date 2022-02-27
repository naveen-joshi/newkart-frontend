import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public API_URL = 'http://localhost:8000/api/users';

  constructor(private http: HttpClient) {}

  public registerUser(userData: User) {
    return this.http.post(this.API_URL, userData);
  }

  public loginUser(userData: User) {
    return this.http.post(this.API_URL + '/login', userData);
  }
}
