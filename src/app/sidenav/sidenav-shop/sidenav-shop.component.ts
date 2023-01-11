import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-shop',
  templateUrl: './sidenav-shop.component.html',
  styleUrls: ['./sidenav-shop.component.scss']
})
export class SidenavShopComponent implements OnInit {
  @Output() public close = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
  }

  public onClose() {
    this.close.emit();
  }
}
