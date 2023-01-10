import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PLAYSTATION_5_ID } from 'src/app/constants/api.constants';
import { PLATFORM_PAGE_LIMIT } from 'src/app/constants/general.constants';
import { GamesService } from 'src/app/services/games/games.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { IGame } from 'src/app/shared/models/Platform';

@Component({
  selector: 'app-ps5',
  templateUrl: './ps5.component.html',
  styleUrls: ['./ps5.component.scss']
})
export class Ps5Component implements OnInit, OnDestroy {
  public isLoading = true;
  public games: IGame[] = [];
  private _subscriptionKiller$: Subject<void> = new Subject<void>();

  constructor(
    private _loadingService: LoadingService, 
    private _gameService: GamesService
  ) { }

  ngOnInit(): void {
    this.loadingCheck();
    this.fetchGames();
  }

  private loadingCheck(): void {
    this._loadingService.stillLoading$.pipe( takeUntil(this._subscriptionKiller$) )
      .subscribe((loading) => this.isLoading = loading);
  }

  private fetchGames(): void {
    this._gameService.fetchGames(PLATFORM_PAGE_LIMIT, PLAYSTATION_5_ID).pipe( takeUntil(this._subscriptionKiller$) ).subscribe((response) => {
      this.games = response.results.filter(game => {
        return game.platforms.filter(platform => platform.id === PLAYSTATION_5_ID);
      });
    });
  }

  public onGameSelect(game: IGame) {
    // this.gameService.viewSelectedGame(game);
  }

  public ngOnDestroy(): void {
    this._subscriptionKiller$.next();
    this._subscriptionKiller$.complete();
  }
}
