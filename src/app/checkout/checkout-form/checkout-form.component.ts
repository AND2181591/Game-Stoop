import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

import { states } from '../states';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  states: string[] = [];
  checkoutForm = new FormGroup({
    firstName: new FormControl('', Validators.required), 
    lastName: new FormControl('', Validators.required), 
    streetAddr: new FormControl('', Validators.required), 
    zip: new FormControl('', Validators.required), 
    city: new FormControl('', Validators.required), 
    state: new FormControl('', Validators.required), 
    email: new FormControl('', [Validators.required, Validators.email]), 
    phone: new FormControl('')
  });


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.states = states;
  }

  onCompleteOrder() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      order: Math.floor(Math.random() * 10000) + 1,
      name: this.checkoutForm.get('firstName')?.value
    }

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => {
      this.checkoutForm.reset();
    });
  }

}
