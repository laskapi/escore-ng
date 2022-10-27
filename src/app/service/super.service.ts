import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperService {


  constructor(private http: HttpClient) { }

  getCompetitions(user: String) {
 //   if (user.length > 0) {
      const url = 'competitions/' + user;
      return this.http.get<any>(url);
  /*   } else {
      return this.http.get<any>('competitions');
    } */
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

  updateCompetition(comp:any){
    return this.http.patch<any>('competitions/'+comp.id, comp);
  }

}
