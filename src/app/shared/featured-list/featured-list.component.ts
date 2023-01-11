import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IGame } from '../models/Platform';

@Component({
  selector: 'app-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.scss']
})
export class FeaturedListComponent implements OnInit {
  @Input() public price: number = 0;
  @Input() public games: IGame[] = [];
  @Output() public gameSelect = new EventEmitter<IGame>();

  constructor() { }

  public ngOnInit(): void {
  }

  public onGameSelect(game: IGame) {
    this.gameSelect.emit(game);
  }
}
