import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutFormComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule, 
    ReactiveFormsModule, 
    FlexLayoutModule
  ]
})
export class CheckoutModule { }
