import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { GamesService } from 'src/app/games.service';
import { Game } from 'src/app/shared/models/Game';


@Component({
  selector: 'app-xbox-one',
  templateUrl: './xbox-one.component.html',
  styleUrls: ['./xbox-one.component.scss']
})
export class XboxOneComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.gameService.fetchGames('xbox-one', '35')
      .subscribe((results) => {
        this.games = results['xbox-one'].data;
      });
  }

  onGameSelect(game: Game) {
    this.gameService.viewSelectedGame(game);
  }

}
