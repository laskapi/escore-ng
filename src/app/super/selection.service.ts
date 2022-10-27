import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserSwitch } from './commons';

@Injectable({
  providedIn: 'root'
})

export class SelectionService {


  userSwitch?: UserSwitch;
  public nameSubject = new Subject<any>();
  selected:any;

  constructor() { }

  setSelected(uSwitch: UserSwitch, selected:any) {
    this.userSwitch = uSwitch;
    this.selected=selected;
    this.nameSubject.next(selected);
  }

}
