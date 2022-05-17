import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public isLoading = false;
  public isError = false;
  public isSuccess = false;
  public errorMessage = '';
  public submitted = false;

  registerForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    phone: new FormControl(),
    name: new FormControl()
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onRegister() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.authService.registerUser(this.registerForm.value).subscribe({
      next: (res) => {
        console.log(res);

        this.isLoading = false;
        this.isError = false;
        this.isSuccess = true;
        this.router.navigate(['/auth/login']);
        //     this.authService.isLoggedIn.next(true);
        // this.router.navigate([this.navigationService.getLastNavigationStartUrl()]);
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
    console.log(this.registerForm.value);
  }
}
