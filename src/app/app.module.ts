import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavigationComponent, 
    HomeComponent, SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    MaterialModule, 
    AppRoutingModule, 
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpHeadersInterceptor, 
      multi: true
    }, 
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpErrorsInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
