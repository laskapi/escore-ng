import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  AUTHORIZATION_TOKEN = 'authenticatedIser';
  USERNAME='username';  
  public usernameSubject=new Subject<String>();


  constructor(private http: HttpClient) { }


  login(username: String, password: String) {

    const headers = new HttpHeaders((username.length && password.length) ? {
      authorization: this.createBasicAuthToken(username, password)
    } : {});

    return this.http.get<any>( 'login', {
      headers: headers
    })
      .pipe(map((auth) => {
        sessionStorage.setItem(this.USERNAME,""+username);
        this.usernameSubject.next(username);
        sessionStorage.setItem(this.AUTHORIZATION_TOKEN, this.createBasicAuthToken(username, password));
        return auth.authority;
      }));
  }


  logout() {
    sessionStorage.removeItem(this.USERNAME);
    sessionStorage.removeItem(this.AUTHORIZATION_TOKEN);
    this.usernameSubject.next('');
    return this.http.post<any>('logout', null)
      .pipe(tap(() => {
     
      }
      ));
  }


  getToken(){
      return sessionStorage.getItem(this.AUTHORIZATION_TOKEN);
    }

  createBasicAuthToken(username: String, password: String) {
    return 'basic ' + window.btoa(username + ":" + password)
  }

  validate(data:String){
    const pattern = /^[a-zA-Z0-9]+$/;
    let result = false;
    if (data.match(pattern)) {
          result = true;
    }
    return result;
  }

}
