import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { LoginComponent } from './login/login.component';
import { SuperComponent } from './super/super.component';
import { AdminComponent } from './admin/admin.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { MenuComponent } from './menu/menu.component';





@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent,
    LoginComponent,
    SuperComponent,
    AdminComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
