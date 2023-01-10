import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Game } from 'src/app/shared/models/Game';
import { TransactionItem } from 'src/app/shared/models/Platform';

@Component({
  selector: 'app-sidecart-order',
  templateUrl: './sidecart-order.component.html',
  styleUrls: ['./sidecart-order.component.scss']
})
export class SidecartOrderComponent implements OnInit {
  @Input() game: TransactionItem = {} as TransactionItem;
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onRemove() {
    this.remove.emit();
  }

}
