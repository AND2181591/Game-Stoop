import { Component, OnInit } from '@angular/core';

import { GamesService } from 'src/app/games.service';

import { Game } from 'src/app/shared/models/Game';
import { GamesByPlatform } from 'src/app/shared/models/Platform';

@Component({
  selector: 'app-ps5',
  templateUrl: './ps5.component.html',
  styleUrls: ['./ps5.component.scss']
})
export class Ps5Component implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    // this.gameService.fetchGames('ps5', '35')
    //   .subscribe((results: GamesByPlatform) => {
    //     this.games = results.ps5.data;
    //   });
  }

}
