import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TransactionItem } from 'src/app/shared/models/Platform';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() public game: TransactionItem = {} as TransactionItem;
  @Input() public price: number = 0;
  @Output() public remove = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
  }

  public onRemove() {
    this.remove.emit();
  }

}
