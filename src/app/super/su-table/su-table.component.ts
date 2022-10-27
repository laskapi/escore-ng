import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperService } from 'src/app/service/super.service';
import { UserSwitch } from '../commons';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-su-table',
  templateUrl: './su-table.component.html',
  styleUrls: ['./su-table.component.css']
})
export class SuTableComponent implements OnInit {
  users?: any[];
  competitions?: any[];
  
  
  constructor(private superService:SuperService, private selectionService:SelectionService, private router:Router) { }

  ngOnInit(): void {
    this.superService.getUsers().subscribe(data=>this.users=data);
  }
  onSelectUser(name: string){
   
      this.selectionService.setSelected(UserSwitch.User,name);
      this.superService.getCompetitions(name).subscribe(data=>this.competitions=data);
     // this.router.navigateByUrl('/super/superUser');
  
  
    }
  onSelectComp(comp:any){
    console.log(comp);
    this.selectionService.setSelected(UserSwitch.Comp,comp);

  
}
  onArchivedChanged(value:boolean){
   // this.superService.
  }

}
