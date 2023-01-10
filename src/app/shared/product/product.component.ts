import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
import { GamesService } from 'src/app/services/games/games.service';
import { IGame } from '../models/Platform';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  public isLoading = true;
  public game: IGame = {} as IGame;
  private _subscriptionKiller$: Subject<void> = new Subject<void>();

  constructor(
    private loadingService: LoadingService, 
    private gameService: GamesService, 
    private cartService: CartService, 
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.loadingCheck();
    this.pageInit();
  }

  public loadingCheck(): void {
    this.loadingService.stillLoading$.pipe( takeUntil(this._subscriptionKiller$) )
      .subscribe(loading => this.isLoading = loading);
  }

  public pageInit(): void {
    const gameId = this.route.snapshot.params['gameId'];
    this.route.params.pipe( takeUntil(this._subscriptionKiller$) ).subscribe((param: Params) => {
      const id = param['gameId'];
      this.viewGame(id);
    });

    this.viewGame(gameId);
  }

  public viewGame(id: number) {
    this.gameService.fetchSelectedGame(id).pipe( takeUntil(this._subscriptionKiller$) )
      .subscribe((selectedGame) => this.game = selectedGame);
  }

  public onAddToCart() {
    this.cartService.addToCart(this.game);
  }

  public ngOnDestroy(): void {
    this._subscriptionKiller$.next();
    this._subscriptionKiller$.complete();
  }
}
