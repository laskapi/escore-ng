import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperService {


  constructor(private http: HttpClient) { }

  getCompetitions() {
    return this.http.get<any>('competitions');
  }
  getUsers() {
    return this.http.get<any>('users');
  }
  addCompetition(cName: string, cAdmin: string) {
    const body: any = {
      name: cName,
      admin: cAdmin
    }
    return this.http.post<any>('competitions', body);
  }

}
