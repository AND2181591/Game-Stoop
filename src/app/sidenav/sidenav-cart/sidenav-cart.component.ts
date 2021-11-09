import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { GamesService } from 'src/app/games.service';

import { Game } from 'src/app/shared/models/Game';

@Component({
  selector: 'app-sidenav-cart',
  templateUrl: './sidenav-cart.component.html',
  styleUrls: ['./sidenav-cart.component.scss']
})
export class SidenavCartComponent implements OnInit {
  @Input() cart: Game[] = [];
  total = 0;

  constructor(
    private gameService: GamesService, 
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getCartTotal();

    this.cartService.getCart$.subscribe((results) => {
      this.cart = results;
    });
  }

  onCheckout() {
    console.log('Awesome');
  }

  onRemove(index: number) {
    this.cartService.removeFromCart(index);
  }

  getTotal() {
    return this.cart.length * this.gameService.getPrice();
  }

}