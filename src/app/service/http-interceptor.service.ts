import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

type NewType = Observable<HttpEvent<any>>;

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {


    constructor(private authService: AuthService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): NewType {


        let token = this.authService.getToken();
        const baseUrl = 'http://localhost:8080/api/';
        let myReq = req.clone({ url: `${baseUrl}${req.url}` });


        if (token) {

            myReq = myReq.clone(
                {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': token
                    })
                });

        }
            console.log(myReq);
        return next.handle(myReq).pipe(
            catchError((error) => {
                this.router.navigateByUrl('/login')
                
                throw new Error(error)
            })



        );


    }
}