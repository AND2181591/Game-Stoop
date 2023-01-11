import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { GamesService } from 'src/app/services/games/games.service';
import { TransactionItem } from 'src/app/shared/models/Platform';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  public price: number = 0;
  public games: TransactionItem[] = [];
  private _subscriptionKiller$: Subject<void> = new Subject<void>();

  constructor(
    private _cartService: CartService, 
    private _gameService: GamesService, 
    private _router: Router
  ) { }

  public ngOnInit(): void {
    this.cartInit();
  }

  public cartInit(): void {
    this._cartService.getCart$.pipe( takeUntil(this._subscriptionKiller$) ).subscribe((results) => {
      this.games = results;
    });
    this.games = this._cartService.getCart();
    this.price = this._gameService.getPrice();
  }

  public onRemove(index: number) {
    this._cartService.removeFromCart(index);
  }

  public onCheckout() {
    this._router.navigateByUrl('/checkout');
  }

  public ngOnDestroy(): void {
    this._subscriptionKiller$.next();
    this._subscriptionKiller$.complete();
  }
}
