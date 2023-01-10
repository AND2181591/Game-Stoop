import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { XBOX_ONE_ID } from 'src/app/constants/api.constants';
import { PLATFORM_PAGE_LIMIT } from 'src/app/constants/general.constants';
import { GamesService } from 'src/app/services/games/games.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { IGame } from 'src/app/shared/models/Platform';

@Component({
  selector: 'app-xbox-one',
  templateUrl: './xbox-one.component.html',
  styleUrls: ['./xbox-one.component.scss']
})
export class XboxOneComponent implements OnInit, OnDestroy {
  public isLoading = true;
  public games: IGame[] = [];
  private _subscriptionKiller$: Subject<void> = new Subject<void>();

  constructor(
    private _loadingService: LoadingService, 
    private _gameService: GamesService
  ) { }

  public ngOnInit(): void {
    this.loadingCheck();
    this.fetchGames();
  }

  public loadingCheck(): void {
    this._loadingService.stillLoading$.pipe( takeUntil(this._subscriptionKiller$) )
      .subscribe((loading) => this.isLoading = loading);
  }

  public fetchGames(): void {
    this._gameService.fetchGames(PLATFORM_PAGE_LIMIT, XBOX_ONE_ID).pipe( takeUntil(this._subscriptionKiller$) ).subscribe(response => {
      this.games = response.results.filter(game => {
        return game.platforms.filter(platform => platform.id === XBOX_ONE_ID);
      });
    });
  }

  public onGameSelect(platform: string, game: IGame) {
    this._gameService.viewSelectedGame(platform, game.id);
  }

  public ngOnDestroy(): void {
    this._subscriptionKiller$.next();
    this._subscriptionKiller$.complete();
  }
}
