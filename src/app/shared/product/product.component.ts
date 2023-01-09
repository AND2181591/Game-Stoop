import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { GamesService } from 'src/app/services/games/games.service';
import { Game } from '../models/Game';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  game: Game = {} as Game;

  constructor(
    private gameService: GamesService, 
    private cartService: CartService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const gameId = this.route.snapshot.params['gameId'];
    this.route.params.subscribe((param: Params) => {
      const id = param['gameId'];
      this.viewGame(id);
    });

    this.viewGame(gameId);
  }

  viewGame(id: number) {
    this.gameService.fetchSelectedGame(id)
      .subscribe((results) => {
        for (let k in results) {
          const result = results[k];
          this.game = result.data;
          break;
        }
      });
  }

  onAddToCart() {
    this.cartService.addToCart(this.game);
  }
}
