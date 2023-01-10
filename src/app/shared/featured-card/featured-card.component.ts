import { Component, Input, OnInit } from '@angular/core';
import { IGame } from '../models/Platform';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss']
})
export class FeaturedCardComponent implements OnInit {
  @Input() price: number = 0;
  @Input() game: IGame = {} as IGame;

  constructor() { }

  ngOnInit(): void {
  }

}
