import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {
  public showPaymentForm = false;
  savedCards = [
    { cardNumber: '7894561237894561', cardHolderName: 'Naveen', cardName: 'ICICI' }
  ]

  paymentDetails: FormGroup = new FormGroup({
    cardNumber: new FormControl(''),
    cardHolderName: new FormControl(''),
    cardName: new FormControl(''),
  });
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.paymentDetails = this.fb.group({
      cardNumber: ['', Validators.required],
      cardHolderName: ['', Validators.required],
      cardName: ['', Validators.required],
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.paymentDetails.controls;
  }

  onDelete(index: number) {
    this.savedCards.splice(index, 1);
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.paymentDetails.invalid) {
      return;
    }
    this.savedCards.push(this.paymentDetails.value);
    this.showPaymentForm = false;
    console.log(this.savedCards);
    console.log(JSON.stringify(this.paymentDetails.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.paymentDetails.reset();
  }
}
