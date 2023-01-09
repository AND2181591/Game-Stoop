import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { GameHttpInterceptor } from './interceptors/game-http.interceptor';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchBarComponent } from './navigation/search-bar/search-bar.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavShopComponent } from './sidenav/sidenav-shop/sidenav-shop.component';
import { SidenavCartComponent } from './sidenav/sidenav-cart/sidenav-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidecartOrderComponent } from './sidenav/sidenav-cart/sidecart-order/sidecart-order.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';


@NgModule({
  declarations: [
    AppComponent, 
    NavigationComponent, 
    SearchBarComponent, 
    HomeComponent, 
    SidenavComponent, 
    PageNotFoundComponent,
    SidenavShopComponent, 
    SidenavCartComponent, 
    SidecartOrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    HttpClientModule, 
    FlexLayoutModule, 
    MaterialModule, 
    AppRoutingModule, 
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: LoadingInterceptor, 
      multi: true
    }, 
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: GameHttpInterceptor, 
      multi: true
    }
  ], 
  bootstrap: [AppComponent], 
  entryComponents: [DialogComponent]
})
export class AppModule { }
