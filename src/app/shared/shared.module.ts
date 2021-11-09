import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

import { FeaturedCardComponent } from './featured-card/featured-card.component';
import { FeaturedListComponent } from './featured-list/featured-list.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    FeaturedCardComponent,
    FeaturedListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule, 
    FlexLayoutModule, 
    MaterialModule
  ], 
  exports: [
    FeaturedCardComponent, 
    FeaturedListComponent, 
    ProductComponent
  ]
})
export class SharedModule { }
