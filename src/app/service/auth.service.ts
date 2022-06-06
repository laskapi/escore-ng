import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = 'http://localhost:8080/api/';

  authenticated = false;

  public username: String = '';
  public password: String = '';

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

  constructor(private http: HttpClient) { }


  login(username: String, password: String) {

    const headers = new HttpHeaders((username.length && password.length) ? {
      authorization: this.createBasicAuthToken(username, password)
    } : {});

    return this.http.get<any>(this.apiUrl + 'login', {
      headers: headers
    })
      .pipe(map((auth) => {
        console.log("i am  login user :: " + auth.username + " : " + auth.password);
        sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, auth.username)
        this.username = username;
        this.password = password;
        return auth.authority;
      }));


  }


  logout() {

    let headers = new HttpHeaders({'Authorization': this.createBasicAuthToken('admin', 'admin') });

    headers=headers.append('Access-Control-Allow-Origin', '*');
   
    let options = {headers:headers};

    return this.http.post<any>(this.apiUrl + 'logot',null,options/*  { headers: headers } */)
      .pipe(tap(() => {
        sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
        this.username = '';
        this.password = '';
        console.log("i am logout user:   "+this.username);
      }
      ));

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  createBasicAuthToken(username: String, password: String) {
    return 'basic ' + window.btoa(username + ":" + password)
  }

}
