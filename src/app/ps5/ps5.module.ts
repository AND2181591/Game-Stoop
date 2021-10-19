import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { Ps5RoutingModule } from './ps5-routing.module';
import { Ps5Component } from './ps5/ps5.component';


@NgModule({
  declarations: [
    Ps5Component
  ],
  imports: [
    CommonModule,
    Ps5RoutingModule, 
    SharedModule
  ]
})
export class Ps5Module { }
