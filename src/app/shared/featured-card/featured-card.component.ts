import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../models/Game';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss']
})
export class FeaturedCardComponent implements OnInit {
  @Input() game: Game = {} as Game;

  constructor() { }

  ngOnInit(): void {
  }

}
