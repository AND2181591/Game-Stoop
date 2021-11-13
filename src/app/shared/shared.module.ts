import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { FeaturedCardComponent } from './featured-card/featured-card.component';
import { FeaturedListComponent } from './featured-list/featured-list.component';
import { ProductComponent } from './product/product.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    FeaturedCardComponent,
    FeaturedListComponent,
    ProductComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule, 
    FlexLayoutModule, 
    MaterialModule, 
    IvyCarouselModule
  ], 
  exports: [
    FeaturedCardComponent, 
    FeaturedListComponent, 
    ProductComponent, 
    CarouselComponent
  ]
})
export class SharedModule { }
