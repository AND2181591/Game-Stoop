import { Component, Input, OnInit } from '@angular/core';
import { IGame } from '../models/Platform';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss']
})
export class FeaturedCardComponent implements OnInit {
  @Input() public price: number = 0;
  @Input() public game: IGame = {} as IGame;

  constructor() { }

  public ngOnInit(): void {
  }

}
