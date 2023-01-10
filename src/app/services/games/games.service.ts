import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GAME_LIST_URL } from 'src/app/constants/api.constants';
import { IGameResponse } from 'src/app/shared/models/Platform';

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
  public fetchGames(pageSize: number, platform: number): Observable<IGameResponse> {
    let params = new HttpParams()
      .set('page_size', pageSize)
      .set('platforms', platform);

    return this.http.get<IGameResponse>(GAME_LIST_URL, {
      params: params
    });
  }

  // // Used by the carousel in the product component to display recommendations
  // fetchNewGames(platform: string): Observable<GamesByPlatform> {
  //   let params = new HttpParams().set('platform', platform);

  //   return this.http.get<GamesByPlatform>(`${env.BASE_URL}/new`, {
  //     params: params
  //   });
  // }


  // // Used for the Product component whenever a game is selected
  // fetchSelectedGame(gameId: Number): Observable<VideoGameDetails> {
  //   let params = new HttpParams().set('game_id', gameId.toString());

  //   return this.http.get<VideoGameDetails>(`${env.BASE_URL}/game`, {
  //     params: params
  //   });
  // }


  // // Used by the search bar to fetch a game by what the user types
  // fetchGameByName(name: string): Observable<Game[]> {
  //   if (name === '') { 
  //     // Handles an empty string if the user clears the search bar
  //     return of();
  //   }

  //   let params = new HttpParams().set('game', name);

  //   return this.http.get<Game[]>(`${env.BASE_URL}/search`, {
  //     params: params
  //   });
  // }
  

  // // Returns the price hard-coded into this service
  // getPrice(): number {
  //   return this.price;
  // }


  // // Used when selecting any game and assigned its platform and id to the route params.
  // viewSelectedGame(game: Game) {
  //   this.router.navigate([game.platform, game.game_id]);
  // }
  
}