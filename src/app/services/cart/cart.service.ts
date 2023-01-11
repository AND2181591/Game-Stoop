import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { GamesService } from '../games/games.service';
import { IGame, TransactionItem } from 'src/app/shared/models/Platform';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart: TransactionItem[] = [];
  public getCart$ = new Subject<TransactionItem[]>();

  constructor(private gameService: GamesService) { }

  public addToCart(game: IGame, platform: string): void {
    const newTransaction: TransactionItem = {
      game: game, 
      price: this.gameService.getPrice(), 
      platform: platform
    };
    this._cart.push(newTransaction);
    this.getCart$.next([...this._cart]);
  }

  public getCart(): TransactionItem[] {
    return [...this._cart];
  }

  public getCartTotal(): number {
    let total: number | undefined = 0;
    this._cart.forEach((game) => {
      total = game.price;
    });

    return total;
  }

  public removeFromCart(index: number): void {
    this._cart.splice(index, 1);
    this.getCart$.next([...this._cart]);
  }

  public clearCart() {
    this._cart = [];
    this.getCart$.next([...this._cart]);
  }
}
