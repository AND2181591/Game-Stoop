import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CART } from '../constants/storage.constants';

import { CartService } from '../services/cart/cart.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public cartLength = 0;
  @Output() public open = new EventEmitter();
  @Output() public openCart = new EventEmitter();

  constructor(
    private _cartService: CartService, 
    private _storageService: StorageService
  ) { }

  public ngOnInit(): void {
    this.fetchCartBadge();
  }

  public fetchCartBadge(): void {
    this._storageService.getItem(CART).then(cart => {
      if (cart !== null) {
      this._cartService.setCart(cart);
      }
    });

    this._cartService.getCart$.subscribe((results) => {
      this.cartLength = results.length;
    });
  }

  public onOpen() {
    this.open.emit();
  }

  public onOpenCart() {
    this.openCart.emit();
  }
}
