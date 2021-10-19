import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

import { Game } from '../shared/models/Game';
import { GamesByPlatform } from '../shared/models/Platform';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ps5: Game[] = [];
  ps4: Game[] = [];
  xboxSeriesX: Game[] = [];
  xboxOne: Game[] = [];

  constructor(private gameService: GamesService) {}

  ngOnInit(): void {
    // this.gameService.fetchGames('ps5', '8')
    //   .subscribe((results: GamesByPlatform) => {
    //     this.ps5 = results.ps5.data;
    //   });

    // this.gameService.fetchGames('ps4', '8')
    //   .subscribe((results: GamesByPlatform) => {
    //     this.ps4 = results.ps4.data;
    //   });

    // this.gameService.fetchGames('xbox-series-x', '8')
    //   .subscribe((results: GamesByPlatform) => {
    //     this.xboxSeriesX = results['xbox-series-x'].data;
    //   });

    // this.gameService.fetchGames('xbox-one', '8')
    //   .subscribe((results: GamesByPlatform) => {
    //     this.xboxOne = results['xbox-one'].data;
    //   });
  }

}



