import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { FeaturedCardComponent } from './featured-card/featured-card.component';
import { FeaturedListComponent } from './featured-list/featured-list.component';
import { ProductComponent } from './product/product.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    FeaturedCardComponent,
    FeaturedListComponent,
    ProductComponent,
    CarouselComponent,
    DialogComponent
  ],
  imports: [
    CommonModule, 
    FlexLayoutModule, 
    MaterialModule, 
    IvyCarouselModule
  ], 
  exports: [
    FlexLayoutModule, 
    FeaturedCardComponent, 
    FeaturedListComponent, 
    ProductComponent, 
    CarouselComponent, 
    MaterialModule
  ]
})
export class SharedModule { }
