import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';
import { Game } from '../models/Game';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  games: Game[] = [];
  platform: string = 'ps4'

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.gameService.fetchNewGames('ps4').subscribe((results) => {
      this.games = results.ps4.data;
    });
  }

  onGameSelect(game: Game): void {
    this.gameService.viewSelectedGame(game);
  }

}
