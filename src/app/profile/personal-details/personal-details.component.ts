import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  personalDetails: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    gender: new FormControl('')
  });
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.personalDetails = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required, Validators.email]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.personalDetails.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.personalDetails.invalid) {
      return;
    }
    console.log(JSON.stringify(this.personalDetails.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.personalDetails.reset();
  }

}
