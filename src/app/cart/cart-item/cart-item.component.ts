import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/shared/models/Game';
import { TransactionItem } from 'src/app/shared/models/Platform';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() game: TransactionItem = {} as TransactionItem;
  @Input() price: number = 0;
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onRemove() {
    this.remove.emit();
  }

}
