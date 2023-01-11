import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GAME_LIST_URL } from 'src/app/constants/api.constants';
import { IGame, IGameResponse } from 'src/app/shared/models/Platform';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private _price = 59.99;

  constructor(
    private http: HttpClient, 
    private router: Router
  ) { }

  // Used in the Home and Platform pages to fetch the games by console.
  public fetchGames(pageSize: number, platform: number): Observable<IGameResponse> {
    let params = new HttpParams()
      .set('page_size', pageSize)
      .set('platforms', platform);

    return this.http.get<IGameResponse>(`${GAME_LIST_URL}?`, {
      params: params
    });
  }


  // Used for the Product component whenever a game is selected
  public fetchSelectedGame(gameID: number): Observable<any> {
    return this.http.get<any>(`${GAME_LIST_URL}/${gameID}?`);
  }


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
  

  // Returns the price hard-coded into this service
  public getPrice(): number {
    return this._price;
  }


  // Used when selecting any game and assigned its platform and id to the route params.
  public viewSelectedGame(platform: string, gameID: number) {
    this.router.navigate([platform, gameID]);
  }
  
}