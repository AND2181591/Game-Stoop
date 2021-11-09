import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

import { Game } from 'src/app/shared/models/Game';

@Component({
  selector: 'app-sidenav-cart',
  templateUrl: './sidenav-cart.component.html',
  styleUrls: ['./sidenav-cart.component.scss']
})
export class SidenavCartComponent implements OnInit {
  @Input() cart: Game[] = [];
  total = 0;

  constructor(private cartService: CartService) { }

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

}
