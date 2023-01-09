import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { GamesService } from 'src/app/services/games/games.service';
import { Game } from 'src/app/shared/models/Game';

@Component({
  selector: 'app-ps5',
  templateUrl: './ps5.component.html',
  styleUrls: ['./ps5.component.scss']
})
export class Ps5Component implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.gameService.fetchGames('ps5', '35')
      .subscribe((results) => {
        this.games = results.ps5.data;
      });
  }

  onGameSelect(game: Game) {
    this.gameService.viewSelectedGame(game);
  }

}
