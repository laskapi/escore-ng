import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { SuperComponent } from './super/super.component';
import { AdminComponent } from './admin/admin.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { MenuComponent } from './menu/menu.component';
import { NewCompModalComponent } from './super/new-comp-modal/new-comp-modal.component';
import { SuCompComponent } from './super/su-comp/su-comp.component';
import { SuUserComponent } from './super/su-user/su-user.component';
import { SuTableComponent } from './super/su-table/su-table.component';





@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    SuperComponent,
    AdminComponent,
    MenuComponent,
    NewCompModalComponent,
    SuCompComponent,
    SuUserComponent,
    SuUserComponent,
    SuTableComponent
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
