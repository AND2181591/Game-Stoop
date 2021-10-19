import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XboxSXComponent } from './xbox-sx/xbox-sx.component';

const routes: Routes = [
  { path: '', component: XboxSXComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XboxSXRoutingModule { }
