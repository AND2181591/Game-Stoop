import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() open = new EventEmitter();
  @Output() openCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onOpen() {
    this.open.emit();
  }

  onOpenCart() {
    this.openCart.emit();
  }
}
