import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { GamesService } from '../games/games.service';
import { IGame, TransactionItem } from 'src/app/shared/models/Platform';
import { StorageService } from '../storage/storage.service';
import { CART } from 'src/app/constants/storage.constants';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart: TransactionItem[] = [];
  public getCart$ = new Subject<TransactionItem[]>();

  constructor(
    private _gameService: GamesService, 
    private _storageService: StorageService
  ) { }

  public setCart(cart: TransactionItem[]): void {
    this._cart = cart;
    this.getCart$.next([...this._cart]);
  }

  public addToCart(game: IGame, platform: string): void {
    const newTransaction: TransactionItem = {
      game: game, 
      price: this._gameService.getPrice(), 
      platform: platform
    };
    this._cart.push(newTransaction);
    this._storageService.setItem(CART, this._cart);

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
    this._storageService.removeData(CART, index);
    this.getCart$.next([...this._cart]);
  }

  public clearCart() {
    this._cart = [];
    this._storageService.deleteItem(CART);
    this.getCart$.next([...this._cart]);
  }
}
