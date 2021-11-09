import { Component, Input, OnInit } from '@angular/core';

import { Game } from 'src/app/shared/models/Game';

@Component({
  selector: 'app-sidecart-order',
  templateUrl: './sidecart-order.component.html',
  styleUrls: ['./sidecart-order.component.scss']
})
export class SidecartOrderComponent implements OnInit {
  @Input() game: Game = {} as Game;

  constructor() { }

  ngOnInit(): void {
  }

}
