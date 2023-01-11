import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { GAME_LIST_URL, PLAYSTATION_4_ID, PLAYSTATION_5_ID, XBOX_ONE_ID, XBOX_SERIES_X_ID } from 'src/app/constants/api.constants';
import { IGameResponse } from 'src/app/shared/models/Platform';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private _price = 59.99;

  constructor(
    private _http: HttpClient, 
    private _router: Router
  ) {}

  // Used in the Home and Platform pages to fetch the games by console.
  public fetchGames(pageSize: number, platform: number): Observable<IGameResponse> {
    let params = new HttpParams()
      .set('page_size', pageSize)
      .set('platforms', platform);

    return this._http.get<IGameResponse>(`${GAME_LIST_URL}?`, {
      params: params
    });
  }

  // Used for the Product component whenever a game is selected
  public fetchSelectedGame(gameID: number): Observable<any> {
    return this._http.get<any>(`${GAME_LIST_URL}/${gameID}?`);
  }

  // Used by the search bar to fetch a game by what the user types
  public fetchGameByName(searchTerm: string): Observable<IGameResponse> {
    let params = new HttpParams()
      .set('search', searchTerm)
      .set('platforms', PLAYSTATION_5_ID)
      .set('platforms', PLAYSTATION_4_ID)
      .set('platforms', XBOX_SERIES_X_ID)
      .set('platforms', XBOX_ONE_ID);

    if (searchTerm === '') {
      return of();
    }

    return this._http.get<IGameResponse>(`${GAME_LIST_URL}?`, {
      params: params
    });
  }

  // Returns the price hard-coded into this service
  public getPrice(): number {
    return this._price;
  }

  // Used when selecting any game and assigned its platform and id to the route params.
  public viewSelectedGame(platform: string, gameID: number) {
    this._router.navigate([platform, gameID]);
  }
}