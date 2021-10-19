import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { Ps4RoutingModule } from './ps4-routing.module';
import { Ps4Component } from './ps4/ps4.component';


@NgModule({
  declarations: [
    Ps4Component
  ],
  imports: [
    CommonModule,
    Ps4RoutingModule, 
    SharedModule
  ]
})
export class Ps4Module { }
