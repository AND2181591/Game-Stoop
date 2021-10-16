import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getGameList() {
    let params = new HttpParams().set('platform', 'xbox-one')
      .set('count', '25');

    return this.http.get(`${env.BASE_URL}`, {
      params: params
    });
  }
}


// {"ps4": ...or whatever platform is being used... "xbox-x" "ps3" etc.
//   {
//     "data": [
//       {
//         "gamename": "Persona 5 Royal", 
//         "platform": "PS4", 
//         "releasedate": "2020-03-31", 
//         "developer": "Atlus", 
//         "gamethemes": "RPG, JRPG, Single-player", 
//         "boxart": "https://cdn2.whatoplay.com/boxart/reg/150x/41406-1582281832.webp", 
//         "gameurl": "https://whatoplay.com/ps4/persona-5-royal/", 
//         "totalgamercount": 10659, 
//         "totalcriticcount": 61, 
//         "gamerscore": 9.74, 
//         "criticscore": 9.42, 
//         "playscore": 9.58, 
//         "gameid": 41406
//       }
//     ]
//   }
// }
