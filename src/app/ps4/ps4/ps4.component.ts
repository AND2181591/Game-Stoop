import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';
import { Game } from 'src/app/shared/models/Game';
import { GamesByPlatform } from 'src/app/shared/models/Platform';

@Component({
  selector: 'app-ps4',
  templateUrl: './ps4.component.html',
  styleUrls: ['./ps4.component.scss']
})
export class Ps4Component implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.gameService.fetchGames('ps4', '35')
      .subscribe((results: GamesByPlatform) => {
        this.games = results.ps4.data;
      });
  }

}
