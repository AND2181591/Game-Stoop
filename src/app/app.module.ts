import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { GameHttpInterceptor } from './interceptors/game-http.interceptor';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavShopComponent } from './sidenav/sidenav-shop/sidenav-shop.component';
import { SidenavCartComponent } from './sidenav/sidenav-cart/sidenav-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidecartOrderComponent } from './sidenav/sidenav-cart/sidecart-order/sidecart-order.component';


@NgModule({
  declarations: [
    AppComponent, 
    NavigationComponent, 
    HomeComponent, 
    SidenavComponent, 
    PageNotFoundComponent,
    SidenavShopComponent, 
    SidenavCartComponent, SidecartOrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    FlexLayoutModule, 
    MaterialModule, 
    AppRoutingModule, 
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: GameHttpInterceptor, 
      multi: true
    }
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
