import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FeaturedCardComponent } from './featured-card/featured-card.component';
import { FeaturedListComponent } from './featured-list/featured-list.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    FeaturedCardComponent,
    FeaturedListComponent
  ],
  imports: [
    CommonModule, 
    FlexLayoutModule, 
    MaterialModule
  ], 
  exports: [
    FeaturedCardComponent, 
    FeaturedListComponent
  ]
})
export class SharedModule { }
