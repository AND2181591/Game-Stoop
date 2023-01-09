import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { GamesService } from 'src/app/services/games/games.service';
import { Game } from 'src/app/shared/models/Game';

@Component({
  selector: 'app-ps4',
  templateUrl: './ps4.component.html',
  styleUrls: ['./ps4.component.scss']
})
export class Ps4Component implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.gameService.fetchGames('ps4', '35')
      .subscribe((results) => {
        this.games = results.ps4.data;
      });
  }

  onGameSelect(game: Game) {
    this.gameService.viewSelectedGame(game);
  }

}
