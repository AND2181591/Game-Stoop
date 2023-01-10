import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PLAYSTATION_5_ID } from '../constants/api.constants';
import { HOME_PAGE_GAME_LIMIT } from '../constants/general.constants';

import { GamesService } from '../services/games/games.service';
import { LoadingService } from '../services/loading/loading.service';
import { Game } from '../shared/models/Game';
import { IGame } from '../shared/models/Platform';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public isLoading = true;
  public ps5: IGame[] = [];
  public ps4: IGame[] = [];
  public xboxSX: IGame[] = [];
  public xboxOne: IGame[] = [];
  public subscriptionKiller$: Subject<void> = new Subject<void>();

  constructor(
    private _gameService: GamesService, 
    private _loadingService: LoadingService
  ) {}

  public ngOnInit(): void {
    this.loadingCheck();
    this.fetchAllGames();
  }

  private loadingCheck(): void {
    this._loadingService.stillLoading$.pipe( takeUntil(this.subscriptionKiller$) )
      .subscribe((loading) => this.isLoading = loading);
  }

  private fetchAllGames(): void {
    this._gameService.fetchGames(HOME_PAGE_GAME_LIMIT, PLAYSTATION_5_ID).pipe( takeUntil(this.subscriptionKiller$) )
      .subscribe((response) => {
        this.ps5 = response.results.filter(game => {
            return game.platforms.filter(platform => platform.id === PLAYSTATION_5_ID);
        });
    });
  }

  public onGameSelect(platform: string, game: IGame) {
    this._gameService.viewSelectedGame(platform, game.id);
  }

  public ngOnDestroy(): void {
    this.subscriptionKiller$.next();
    this.subscriptionKiller$.complete();
  }
}



