import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from '../shared/models/Game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.gameService.getGameList('metacritic', 'Halo')
      .subscribe(results => {
        console.log(results);
      })
  }

}
