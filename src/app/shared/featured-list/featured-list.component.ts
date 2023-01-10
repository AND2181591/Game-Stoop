import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../models/Game';
import { IGame } from '../models/Platform';

@Component({
  selector: 'app-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.scss']
})
export class FeaturedListComponent implements OnInit {
  @Input() price: number = 0;
  @Input() games: IGame[] = [];
  @Output() gameSelect = new EventEmitter<IGame>();

  constructor() { }

  ngOnInit(): void {
  }

  onGameSelect(game: IGame) {
    this.gameSelect.emit(game);
  }
}
