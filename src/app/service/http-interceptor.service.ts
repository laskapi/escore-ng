import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

type NewType = Observable<HttpEvent<any>>;

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): NewType {
      if (this.authService.isUserLoggedIn()  /* && req.url.indexOf('api') === -1 */ ) {
        console.log("header:: "+this.authService.username+" : "+this.authService.password);

        const authReq = req.clone({
              headers: new HttpHeaders({
                  'Content-Type': 'application/json',
                  'Authorization':  'basic ' + window.btoa("admin:admin")
              })
          });
          return next.handle(req);
      } else {
          return next.handle(req);
      }
  }
}