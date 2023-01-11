import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { states } from '../states';
import { TransactionItem } from 'src/app/shared/models/Platform';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit, OnDestroy {
  private _subscriptionKiller$: Subject<void> = new Subject<void>();
  public cart: TransactionItem[] = [];
  public states: string[] = [];
  public checkoutForm = new FormGroup({
    firstName: new FormControl('', Validators.required), 
    lastName: new FormControl('', Validators.required), 
    streetAddr: new FormControl('', Validators.required), 
    zip: new FormControl('', Validators.required), 
    city: new FormControl('', Validators.required), 
    state: new FormControl('', Validators.required), 
    email: new FormControl('', [Validators.required, Validators.email]), 
    phone: new FormControl('')
  });


  constructor(
    private _dialog: MatDialog, 
    private _cartService: CartService, 
    private _router: Router
  ) { }

  public ngOnInit(): void {
    this.checkoutFormInit();
  }

  private checkoutFormInit(): void {
    this.states = states;
    this._cartService.getCart$.pipe( takeUntil(this._subscriptionKiller$) ).subscribe((results) => {
      this.cart = results;
    });
    
    this.cart = this._cartService.getCart();
  } 

  public onCompleteOrder() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      order: Math.floor(Math.random() * 10000) + 1,
      name: this.checkoutForm.get('firstName')?.value
    }

    const dialogRef = this._dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => {
      this.checkoutForm.reset();
      this._cartService.clearCart();
      this._router.navigateByUrl('/');
    });
  }

  public ngOnDestroy(): void {
    this._subscriptionKiller$.next();
    this._subscriptionKiller$.complete();
  }

}
