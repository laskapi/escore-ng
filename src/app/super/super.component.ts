import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { SelectionService } from './selection.service';
import { UserSwitch } from './commons';



@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {
/* comp:UserSwitch=UserSwitch.Comp;
user:UserSwitch=UserSwitch.User; */
public UserSwitch=UserSwitch;
 constructor(public selectionService:SelectionService){};
  ngOnInit(): void {
  
  }
}