import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { map } from 'rxjs/operators';

import { GamesService } from 'src/app/games.service';
import { Game } from 'src/app/shared/models/Game';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchForm = new FormGroup({
    searchGame: new FormControl('', Validators.required)
  });
  gameResults: Game[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.searchForm.get('searchGame')?.valueChanges
      .pipe(
        debounceTime(100), 
        distinctUntilChanged()
      )
      .subscribe((query) => {this.gameService.fetchGameByName(query)
        .pipe(
          map((results) => {
            let filteredRes: Game[] = [];

            for (let i = 0; i < results.length; i++) {
              const platform = results[i].platform;
              if (platform === 'PS5' || platform === 'PS4' || 
                platform === 'XB1' || platform === 'Series X') {
                filteredRes.push(results[i]);
              }
            }
            return filteredRes;
          })
        )
        .subscribe((results) => {
          this.gameResults = results;
        })
      });
  }

  onSubmit(game: Game): void {
    this.gameService.viewSelectedGame(game);
    
    this.searchForm.reset();
  }

}
