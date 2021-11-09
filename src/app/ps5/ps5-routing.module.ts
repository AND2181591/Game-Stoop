import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../shared/product/product.component';

import { Ps5Component } from './ps5/ps5.component';


const routes: Routes = [
  { path: '', component: Ps5Component }, 
  { path: ':gameId', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ps5RoutingModule { }
