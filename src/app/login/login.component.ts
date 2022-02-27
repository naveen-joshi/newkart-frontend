import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public isLoginMode = true;
  public isRegisterMode = false;
  public isForgotMode = false;
  public isLoading = false;
  public isError = false;
  public isSuccess = false;
  public errorMessage = '';
  public successMesage = '';
  constructor(
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LoginComponent>
  ) {}

  ngOnInit(): void {}
  onRegisterSwitchMode() {
    this.isLoginMode = false;
    this.isRegisterMode = true;
    this.isForgotMode = false;
  }
  onLoginSwitchMode() {
    this.isLoginMode = true;
    this.isRegisterMode = false;
    this.isForgotMode = false;
  }
  onForgotSwitchMode() {
    this.isLoginMode = false;
    this.isRegisterMode = false;
    this.isForgotMode = true;
  }
  onLogin(loginForm: NgForm) {
    this.isLoading = true;
    this.authService.loginUser(loginForm.value).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem('User', JSON.stringify(response));
        this.isLoading = false;
        this.isSuccess = true;
        this.isError = false;
        this.data.isLoggedIn = true;
        this.dialogRef.close(this.data.isLoggedIn);
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        this.isError = true;
        this.isSuccess = false;
        this.errorMessage = error.message;
      }
    );
    console.log(loginForm.value);
  }
  onRegister(registerForm: NgForm) {
    this.isLoading = true;
    this.authService.registerUser(registerForm.value).subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
        this.isSuccess = true;
        this.isError = false;
        this.successMesage = 'Registered Succeessfully, Please login';
        this.isRegisterMode = false;
        this.isLoginMode = true;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        this.isError = true;
        this.isSuccess = false;
        this.errorMessage = error.message;
      }
    );
    console.log(registerForm.value);
  }
  onForgot(forgotForm: NgForm) {
    console.log(forgotForm.value);
  }
}
