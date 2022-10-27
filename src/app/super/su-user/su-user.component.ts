import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-su-user',
  templateUrl: './su-user.component.html',
  styleUrls: ['./su-user.component.css']
})
export class SuUserComponent implements OnInit {
  users?: any[];
  competitions?: any[];
  
  
  constructor(private superService:SuperService,public selectionService:SelectionService) {
 
   }

  ngOnInit(): void {
    this.superService.getUsers().subscribe(data=>this.users=data);
  
  }
  onSelectUser(username: any){
   
   
      this.superService.getCompetitions(username).subscribe(data=>this.competitions=data);
  }
  onArchivedChanged(value:boolean){
   // this.superService.
  }

}
