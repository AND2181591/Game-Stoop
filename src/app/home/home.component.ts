import { Component, OnInit } from '@angular/core';

import { GamesService } from '../games.service';
import { Game } from '../shared/models/Game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ps5: Game[] = [];
  ps4: Game[] = [];
  xboxSX: Game[] = [];
  xboxOne: Game[] = [];

  constructor(private gameService: GamesService) {}

  ngOnInit(): void {
    this.gameService.fetchGames('ps5', '8').subscribe((results) => {
      this.ps5 = results.ps5.data;
    });

    this.gameService.fetchGames('ps4', '8').subscribe((results) => {
      this.ps4 = results.ps4.data;
    });

    this.gameService.fetchGames('xbox-series-x', '8').subscribe((results) => {
      this.xboxSX = results['xbox-series-x'].data;
    });

    this.gameService.fetchGames('xbox-one', '8').subscribe((results) => {
      this.xboxOne = results['xbox-one'].data;
    });
  }

  onGameSelect(game: Game) {
    this.gameService.viewSelectedGame(game);
  }

}



