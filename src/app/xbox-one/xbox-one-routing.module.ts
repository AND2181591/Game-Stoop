import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../shared/product/product.component';
import { XboxOneComponent } from './xbox-one/xbox-one.component';

const routes: Routes = [
  { path: '', component: XboxOneComponent }, 
  { path: ':gameId', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XboxOneRoutingModule { }
