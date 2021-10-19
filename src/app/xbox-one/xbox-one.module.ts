import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { XboxOneRoutingModule } from './xbox-one-routing.module';
import { XboxOneComponent } from './xbox-one/xbox-one.component';


@NgModule({
  declarations: [
    XboxOneComponent
  ],
  imports: [
    CommonModule,
    XboxOneRoutingModule, 
    SharedModule
  ]
})
export class XboxOneModule { }
