import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { GamesService } from 'src/app/services/games/games.service';
import { Game } from 'src/app/shared/models/Game';

@Component({
  selector: 'app-xbox-sx',
  templateUrl: './xbox-sx.component.html',
  styleUrls: ['./xbox-sx.component.scss']
})
export class XboxSXComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.gameService.fetchGames('xbox-series-x', '35')
      .subscribe((results) => {
        this.games = results['xbox-series-x'].data;
      });
  }

  onGameSelect(game: Game) {
    this.gameService.viewSelectedGame(game);
  }

}
