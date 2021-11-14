import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';
import { Game } from 'src/app/shared/models/Game';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  price: number = 0;
  games: Game[] = []

  constructor(
    private cartService: CartService, 
    private gameService: GamesService
  ) { }

  ngOnInit(): void {
    this.cartService.getCart$.subscribe((results) => {
      this.games = results;
    });
    this.games = this.cartService.getCart();
    this.price = this.gameService.getPrice();
  }

  onRemove(index: number) {
    this.cartService.removeFromCart(index);
  }

}
