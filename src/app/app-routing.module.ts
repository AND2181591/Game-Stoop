import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
    {
        path: 'PS5', 
        loadChildren: () => 
            import('./ps5/ps5.module').then(m => m.Ps5Module)
    }, 
    {
        path: 'PS4', 
        loadChildren: () => 
            import('./ps4/ps4.module').then(m => m.Ps4Module)
    }, 
    {
        path: 'Series X', 
        loadChildren: () => 
            import('./xbox-sx/xbox-sx.module').then(m => m.XboxSXModule)
    }, 
    {
        path: 'XB1', 
        loadChildren: () => 
            import('./xbox-one/xbox-one.module').then(m => m.XboxOneModule)
    }, 
    {
        path: 'cart', 
        loadChildren: () => 
            import('./cart/cart.module').then(m => m.CartModule)
    }, 
    { path: '', component: HomeComponent }, 
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})
export class AppRoutingModule {}