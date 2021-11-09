import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';

import { Game } from './shared/models/Game';
import { VideoGameDetails } from './shared/models/GameDetails';
import { GamesByPlatform } from './shared/models/Platform';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private price = 59.99;

  constructor(
    private http: HttpClient, 
    private router: Router
  ) { }

  // Used in the Home and Platform pages to fetch the games by console.
  fetchGames(platform: string, count: string): Observable<GamesByPlatform> {
    let params = new HttpParams().set('platform', platform)
      .set('count', count);

    return this.http.get<GamesByPlatform>(`${env.BASE_URL}/platform`, {
      params: params
    });
  }

  // Used for the Product component whenever a game is selected
  fetchSelectedGame(gameId: Number): Observable<VideoGameDetails> {
    let params = new HttpParams().set('game_id', gameId.toString());

    return this.http.get<VideoGameDetails>(`${env.BASE_URL}/game`, {
      params: params
    });
  }

  getPrice(): number {
    return this.price;
  }

  // Used when selecting any game and assigned its platform and id to the route params.
  viewSelectedGame(game: Game) {
    this.router.navigate([game.platform, game.game_id]);
  }
  
}