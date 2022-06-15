import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

type NewType = Observable<HttpEvent<any>>;

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): NewType {


   let token=this.authService.getToken();
   const baseUrl='http://localhost:8080/api/';
   const myReq=req.clone({ url: `${baseUrl}${req.url}`});
   
   
   if(token){

        const authReq = myReq.clone(
            {     headers: new HttpHeaders({
                  'Content-Type': 'application/json',
                  'Authorization': token/*  'basic ' + window.btoa("admin:admin" )*/
              })
          });
          return next.handle(authReq);
      } else {
          return next.handle(myReq);
      }
  }
}