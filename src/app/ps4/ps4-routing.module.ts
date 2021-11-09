import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../shared/product/product.component';

import { Ps4Component } from './ps4/ps4.component';

const routes: Routes = [
  { path: '', component: Ps4Component }, 
  { path: ':gameId', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ps4RoutingModule { }
