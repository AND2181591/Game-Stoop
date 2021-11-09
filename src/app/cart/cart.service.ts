import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { GamesService } from '../games.service';

import { Game } from '../shared/models/Game';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Game[] = [];
  getCart$ = new Subject<Game[]>();

  constructor(private gameService: GamesService) { }

  getCart(): Game[] {
    return [...this.cart];
  }

  addToCart(game: Game): void {
    game.price = this.gameService.getPrice();
    this.cart.push(game);
    this.getCart$.next([...this.cart]);
  }

  removeFromCart(gameId: number): void {
    this.cart = this.cart.filter((game) => {
      return game.game_id !== gameId;
    });

    this.getCart$.next([...this.cart]);
  }

  getCartTotal(): number {
    let total: number | undefined = 0;
    this.cart.forEach((game) => {
      total = game.price;
    });

    return total;
  }
}
