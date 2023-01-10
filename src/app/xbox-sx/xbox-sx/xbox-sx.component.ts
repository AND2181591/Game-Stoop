import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { IGame } from 'src/app/shared/models/Platform';

@Component({
  selector: 'app-xbox-sx',
  templateUrl: './xbox-sx.component.html',
  styleUrls: ['./xbox-sx.component.scss']
})
export class XboxSXComponent implements OnInit {
  games: IGame[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    // this.gameService.fetchGames('xbox-series-x', '35')
    //   .subscribe((results) => {
    //     this.games = results['xbox-series-x'].data;
    //   });
  }

  onGameSelect(game: IGame) {
    // this.gameService.viewSelectedGame(game);
  }

}
