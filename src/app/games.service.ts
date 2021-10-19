import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';
import { GamesByPlatform } from './shared/models/Platform';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  
  fetchGames(platform: string, count: string): Observable<GamesByPlatform> {
    let params = new HttpParams().set('platform', platform)
      .set('count', count);

    return this.http.get<GamesByPlatform>(`${env.BASE_URL}/platform`, {
      params: params
    });
  }
}