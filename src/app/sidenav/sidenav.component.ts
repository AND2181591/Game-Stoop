import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() public topHeader: string = '';
  @Input() public bigHeader: string = '';
  @Input() public cart: [] = [];
  @Output() public close = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
  }

  public onClose() {
    this.close.emit();
  }
}
