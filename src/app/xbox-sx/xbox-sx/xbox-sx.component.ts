import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';
import { Game } from 'src/app/shared/models/Game';
import { GamesByPlatform } from 'src/app/shared/models/Platform';

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
      .subscribe((results: GamesByPlatform) => {
        this.games = results['xbox-series-x'].data;
      });
  }

}
