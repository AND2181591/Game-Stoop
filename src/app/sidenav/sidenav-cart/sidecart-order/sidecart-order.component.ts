import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TransactionItem } from 'src/app/shared/models/Platform';

@Component({
  selector: 'app-sidecart-order',
  templateUrl: './sidecart-order.component.html',
  styleUrls: ['./sidecart-order.component.scss']
})
export class SidecartOrderComponent implements OnInit {
  @Input() public game: TransactionItem = {} as TransactionItem;
  @Output() public remove = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
  }

  public onRemove() {
    this.remove.emit();
  }

}
