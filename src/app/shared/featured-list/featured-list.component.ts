import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../models/Game';

@Component({
  selector: 'app-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.scss']
})
export class FeaturedListComponent implements OnInit {
  @Input() price: number = 0;
  @Input() games: Game[] = [];
  @Output() gameSelect = new EventEmitter<Game>();

  constructor() { }

  ngOnInit(): void {
  }

  onGameSelect(game: Game) {
    this.gameSelect.emit(game);
  }
}
