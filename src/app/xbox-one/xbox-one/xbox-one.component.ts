import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { IGame } from 'src/app/shared/models/Platform';

@Component({
  selector: 'app-xbox-one',
  templateUrl: './xbox-one.component.html',
  styleUrls: ['./xbox-one.component.scss']
})
export class XboxOneComponent implements OnInit {
  games: IGame[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    // this.gameService.fetchGames('xbox-one', '35')
    //   .subscribe((results) => {
    //     this.games = results['xbox-one'].data;
    //   });
  }

  onGameSelect(game: IGame) {
    // this.gameService.viewSelectedGame(game);
  }

}
