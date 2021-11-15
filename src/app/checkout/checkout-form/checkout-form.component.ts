import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { states } from '../states';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  states: string[] = [];
  checkoutForm = new FormGroup({
    firstName: new FormControl(''), 
    lastName: new FormControl(''), 
    streetAddr: new FormControl(''), 
    zip: new FormControl(''), 
    city: new FormControl(''), 
    state: new FormControl(''), 
    email: new FormControl(''), 
    phone: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
    this.states = states;
  }

}
