import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../shared/product/product.component';
import { XboxSXComponent } from './xbox-sx/xbox-sx.component';

const routes: Routes = [
  { path: '', component: XboxSXComponent }, 
  { path: ':gameId', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XboxSXRoutingModule { }
