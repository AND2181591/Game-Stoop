import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PLAYSTATION_5_ID } from '../constants/api.constants';

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

  public loadingCheck(): void {
    this._loadingService.stillLoading$.pipe( takeUntil(this.subscriptionKiller$) )
      .subscribe((loading) => this.isLoading = loading);
  }

  public fetchAllGames(): void {
    this._gameService.fetchGames(PLAYSTATION_5_ID).subscribe((response) => {
      this.ps5 = response.results.filter(game => {
        return game.platforms.filter(platform => platform.id === PLAYSTATION_5_ID);
      });
    });
    // this._gameService.fetchGames('ps5', '8').subscribe((results) => {
    //   this.ps5 = results.ps5.data;
    // });

    // this._gameService.fetchGames('ps4', '8').subscribe((results) => {
    //   this.ps4 = results.ps4.data;
    // });

    // this._gameService.fetchGames('xbox-series-x', '8').subscribe((results) => {
    //   this.xboxSX = results['xbox-series-x'].data;
    // });

    // this._gameService.fetchGames('xbox-one', '8').subscribe((results) => {
    //   this.xboxOne = results['xbox-one'].data;
    // });
  }

  onGameSelect(game: IGame) {
    // this._gameService.viewSelectedGame(game);
  }

  public ngOnDestroy(): void {
    this.subscriptionKiller$.next();
    this.subscriptionKiller$.complete();
  }
}



