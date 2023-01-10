import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { IGame } from 'src/app/shared/models/Platform';

@Component({
  selector: 'app-ps5',
  templateUrl: './ps5.component.html',
  styleUrls: ['./ps5.component.scss']
})
export class Ps5Component implements OnInit {
  games: IGame[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    // this.gameService.fetchGames('ps5', '35')
    //   .subscribe((results) => {
    //     this.games = results.ps5.data;
    //   });
  }

  onGameSelect(game: IGame) {
    // this.gameService.viewSelectedGame(game);
  }

}
