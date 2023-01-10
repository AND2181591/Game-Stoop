import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { GamesService } from '../games/games.service';
import { Game } from '../../shared/models/Game';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Game[] = [];
  getCart$ = new Subject<Game[]>();

  constructor(private gameService: GamesService) { }

  addToCart(game: Game): void {
    // game.price = this.gameService.getPrice();
    this.cart.push(game);
    this.getCart$.next([...this.cart]);
  }

  getCart(): Game[] {
    return [...this.cart];
  }

  getCartTotal(): number {
    let total: number | undefined = 0;
    this.cart.forEach((game) => {
      total = game.price;
    });

    return total;
  }

  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
    this.getCart$.next([...this.cart]);
  }

  clearCart() {
    this.cart = [];
    this.getCart$.next([...this.cart]);
  }
}
