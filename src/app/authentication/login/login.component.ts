import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../service/auth.service';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public isLoading = false;
  public isError = false;
  public isSuccess = false;
  public errorMessage = '';
  public submitted = false;

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    rememberme: new FormControl(true)
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router,
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberme: [true]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;

    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: (res) => {
        console.log(res);
        if (this.loginForm.value.rememberme === true) {
          this.cookieService.set('loggedIn', 'true', { expires: 30 });
        }
        localStorage.setItem('jwtToken', JSON.stringify(res.token));
        this.isLoading = false;
        this.isError = false;
        this.authService.isLoggedIn.next(true);
        if (res.token) {
          const token = JSON.parse(atob(res.token.split('.')[1]));
          if (!this._tokenExpired(token.exp)) {
            if (token.isAdmin) {
              this.router.navigate(['/admin']);
            };
          }
        }
        this.router.navigate([this.navigationService.getLastNavigationStartUrl()]);
      }, error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        this.isError = true;
        this.isSuccess = false;
        if (err.status === 200) {
          this.errorMessage = err.error.text
        } else if (err.status === 400) {
          this.errorMessage = err.error;
        } else {
          this.errorMessage = 'Server Error. Please Try after sometime';
        }
        console.log(err);
      }
    });
    console.log(this.loginForm.value);
  }

  private _tokenExpired(expiration): boolean {
    return Math.floor(new Date().getTime() / 1000) >= expiration
  }
}
