import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-shop',
  templateUrl: './sidenav-shop.component.html',
  styleUrls: ['./sidenav-shop.component.scss']
})
export class SidenavShopComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit();
  }
}
