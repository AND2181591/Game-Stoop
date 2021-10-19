import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';
import { Game } from 'src/app/shared/models/Game';
import { GamesByPlatform } from 'src/app/shared/models/Platform';

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
      .subscribe((results: GamesByPlatform) => {
        this.games = results['xbox-one'].data;
      });
  }

}
