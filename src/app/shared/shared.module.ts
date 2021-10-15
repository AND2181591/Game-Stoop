import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedCardComponent } from './featured-card/featured-card.component';


@NgModule({
  declarations: [
    FeaturedCardComponent
  ],
  imports: [
    CommonModule, 
  ], 
  exports: [
    FeaturedCardComponent
  ]
})
export class SharedModule { }
