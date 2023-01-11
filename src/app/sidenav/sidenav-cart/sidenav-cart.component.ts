import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../services/cart/cart.service';
import { GamesService } from 'src/app/services/games/games.service';

import { TransactionItem } from 'src/app/shared/models/Platform';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav-cart',
  templateUrl: './sidenav-cart.component.html',
  styleUrls: ['./sidenav-cart.component.scss']
})
export class SidenavCartComponent implements OnInit, OnDestroy {
  @Output() public close = new EventEmitter();
  @Input() public cart: TransactionItem[] = [];
  public total = 0;
  private _subscriptionKiller$: Subject<void> = new Subject<void>();

  constructor(
    private _gameService: GamesService, 
    private _cartService: CartService, 
    private _router: Router
  ) { }

  public ngOnInit(): void {
    this.sidenavInit();
  }

  public sidenavInit(): void {
    this.cart = this._cartService.getCart();
    this.total = this._cartService.getCartTotal();

    this._cartService.getCart$.pipe( takeUntil(this._subscriptionKiller$) ).subscribe((results) => {
      this.cart = results;
    });
  }

  public onCheckout() {
    this._router.navigateByUrl('/cart');
    this.close.emit();
  }

  public onRemove(index: number) {
    this._cartService.removeFromCart(index);
  }

  public getTotal() {
    return this.cart.length * this._gameService.getPrice();
  }

  public ngOnDestroy(): void {
    this._subscriptionKiller$.next();
    this._subscriptionKiller$.complete();
  }
}
