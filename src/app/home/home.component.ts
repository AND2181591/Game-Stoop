import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  games = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    // this.gameService.getGameList()
    //   .subscribe((result: any) => {
    //     this.games = result;
    //     console.log(this.games);
    //   })
  }

}
