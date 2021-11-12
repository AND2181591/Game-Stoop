import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  cartLength = '';
  // gameSearch = new FormControl('');
  @Output() open = new EventEmitter();
  @Output() openCart = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart$.subscribe((results) => {
      this.cartLength = results.length.toString();
    });
    // this.cartLength = this.cartService.getCart().length.toString();
  }

  onOpen() {
    this.open.emit();
  }

  onOpenCart() {
    this.openCart.emit();
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }
}
