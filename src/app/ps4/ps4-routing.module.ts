import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ps4Component } from './ps4/ps4.component';

const routes: Routes = [
  { path: '', component: Ps4Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ps4RoutingModule { }
