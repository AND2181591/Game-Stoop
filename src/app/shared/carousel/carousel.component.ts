import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PLATFORM_PAGE_LIMIT } from 'src/app/constants/general.constants';
import { GamesService } from 'src/app/services/games/games.service';
import { IGame } from '../models/Platform';
import PlatformConversionUtil from '../utilities/platform-conversion.util';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  private _subscriptionKiller$: Subject<void> = new Subject<void>();
  public games: IGame[] = [];
  public platform: string = '';

  constructor(
    private _gameService: GamesService, 
    private _route: ActivatedRoute
  ) { }

  
  public ngOnInit(): void {
    this.carouselInit();
  }

  public carouselInit(): void {
    this._route.data.pipe( takeUntil(this._subscriptionKiller$) ).subscribe((result) => {
      const platformID = PlatformConversionUtil.convertRouteToPlatformID(result.name);
      this.platform = result.name; 

      this._gameService.fetchGames(PLATFORM_PAGE_LIMIT, platformID).pipe( takeUntil(this._subscriptionKiller$) ).subscribe((response) => {
        this.games = response.results.filter(game => {
          return game.platforms.filter(platform => platform.id === platformID);
        });
      });
    });
  }

  public onGameSelect(gameID: number): void {
    this._gameService.viewSelectedGame(this.platform, gameID);
  }

  public ngOnDestroy(): void {
    this._subscriptionKiller$.next();
    this._subscriptionKiller$.complete();
  }

}
