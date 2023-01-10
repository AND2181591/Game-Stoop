import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { GamesService } from '../games/games.service';
import { Game } from '../../shared/models/Game';
import { IGame, TransactionItem } from 'src/app/shared/models/Platform';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: TransactionItem[] = [];
  public getCart$ = new Subject<TransactionItem[]>();

  constructor(private gameService: GamesService) { }

  public addToCart(game: IGame): void {
    const newTransaction: TransactionItem = {
      game: game, 
      price: this.gameService.getPrice()
    };
    this.cart.push(newTransaction);
    this.getCart$.next([...this.cart]);
  }

  public getCart(): TransactionItem[] {
    return [...this.cart];
  }

  public getCartTotal(): number {
    let total: number | undefined = 0;
    this.cart.forEach((game) => {
      total = game.price;
    });

    return total;
  }

  public removeFromCart(index: number): void {
    this.cart.splice(index, 1);
    this.getCart$.next([...this.cart]);
  }

  public clearCart() {
    this.cart = [];
    this.getCart$.next([...this.cart]);
  }
}
