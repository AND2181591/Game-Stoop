import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { XboxSXRoutingModule } from './xbox-sx-routing.module';
import { XboxSXComponent } from './xbox-sx/xbox-sx.component';


@NgModule({
  declarations: [
    XboxSXComponent
  ],
  imports: [
    CommonModule,
    XboxSXRoutingModule, 
    SharedModule
  ]
})
export class XboxSXModule { }
