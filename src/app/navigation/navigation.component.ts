import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  cartLength = '';
  @Output() open = new EventEmitter();
  @Output() openCart = new EventEmitter();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getCart$.subscribe((results) => {
      this.cartLength = results.length.toString();
    });
  }

  onOpen() {
    this.open.emit();
  }

  onOpenCart() {
    this.openCart.emit();
  }
}
