import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { XboxOneComponent } from './xbox-one/xbox-one.component';

const routes: Routes = [
  { path: '', component: XboxOneComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XboxOneRoutingModule { }
