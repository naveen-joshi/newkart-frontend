import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit {
  public showAddressForm = false;
  addressDetails: FormGroup = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipcode: new FormControl(''),
    addressType: new FormControl('')
  });
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addressDetails = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      addressType: ['', Validators.required]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addressDetails.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.addressDetails.invalid) {
      return;
    }
    console.log(JSON.stringify(this.addressDetails.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.addressDetails.reset();
  }
}
