import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { map } from 'rxjs/operators';
import { PLAYSTATION_4_ID, PLAYSTATION_5_ID, XBOX_ONE_ID, XBOX_SERIES_X_ID } from 'src/app/constants/api.constants';
import { PS5 } from 'src/app/constants/route.constants';

import { GamesService } from 'src/app/services/games/games.service';
import { IGame } from 'src/app/shared/models/Platform';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public searchForm = new FormGroup({
    searchGame: new FormControl('', Validators.required)
  });
  public gameResults: IGame[] = [];

  constructor(private _gameService: GamesService) { }

  public ngOnInit(): void {
    this.searchBarInit();
  }

  public searchBarInit(): void {
    this.searchForm.get('searchGame')?.valueChanges.pipe(
      debounceTime(100), 
      distinctUntilChanged(), 
      switchMap((query) => {
        return this._gameService.fetchGameByName(query).pipe(
          map((response) => {
            const filteredRes = response.results.filter(game => {
              return game.platforms.filter(platform => platform.id === PLAYSTATION_5_ID || platform.id === PLAYSTATION_4_ID || 
                platform.id === XBOX_SERIES_X_ID || platform.id === XBOX_ONE_ID);
            });
            return filteredRes;
          })
        );
      })
    ).subscribe(games => this.gameResults = games);
  }

  public onSubmit(game: IGame): void {
    this._gameService.viewSelectedGame(PS5, game.id);
    this.searchForm.reset();
  }
}
