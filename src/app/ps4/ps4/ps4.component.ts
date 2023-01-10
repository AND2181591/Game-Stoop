import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { IGame } from 'src/app/shared/models/Platform';

@Component({
  selector: 'app-ps4',
  templateUrl: './ps4.component.html',
  styleUrls: ['./ps4.component.scss']
})
export class Ps4Component implements OnInit {
  games: IGame[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    // this.gameService.fetchGames('ps4', '35')
    //   .subscribe((results) => {
    //     this.games = results.ps4.data;
    //   });
  }

  onGameSelect(game: IGame) {
    // this.gameService.viewSelectedGame(game);
  }

}
