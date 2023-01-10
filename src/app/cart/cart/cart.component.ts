import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GamesService } from 'src/app/services/games/games.service';
import { Game } from 'src/app/shared/models/Game';
import { TransactionItem } from 'src/app/shared/models/Platform';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  price: number = 0;
  games: TransactionItem[] = []

  constructor(
    private cartService: CartService, 
    private gameService: GamesService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartService.getCart$.subscribe((results) => {
      this.games = results;
    });
    this.games = this.cartService.getCart();
    // this.price = this.gameService.getPrice();
  }

  onRemove(index: number) {
    this.cartService.removeFromCart(index);
  }

  onCheckout() {
    this.router.navigateByUrl('/checkout');
  }

}
