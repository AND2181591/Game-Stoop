import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../models/Game';

@Component({
  selector: 'app-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.scss']
})
export class FeaturedListComponent implements OnInit {
  @Input() games: Game[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
