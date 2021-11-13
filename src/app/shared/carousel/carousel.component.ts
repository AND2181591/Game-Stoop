import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/games.service';
import { Game } from '../models/Game';
import { Platforms } from '../models/Platform';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  games: Game[] = [];

  constructor(
    private gameService: GamesService, 
    private route: ActivatedRoute
  ) { }

  
  ngOnInit(): void {
    this.route.data.subscribe((result) => {
      const gamePlatform = this.platformInit(result.name);

      this.gameService.fetchNewGames(gamePlatform).subscribe((results) => {
        this.games = results[gamePlatform].data;
      });
    });
    
  }

  platformInit(platform: string): Platforms {
    const ps4 = Platforms[Platforms.ps4];
    const xb1 = Platforms[Platforms['xbox-one']];

    if (platform === 'PS5' || platform === 'PS4') {
      return ps4;
    } else {
      return xb1;
    }
  }

  onGameSelect(game: Game): void {
    this.gameService.viewSelectedGame(game);
  }

}
