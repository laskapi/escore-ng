import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperService } from 'src/app/service/super.service';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-su-comp',
  templateUrl: './su-comp.component.html',
  styleUrls: ['./su-comp.component.css']
})
export class SuCompComponent implements OnInit {

  public comp: any;
public isNameEditable:boolean=false;
  compReset: any;

  constructor(private superService: SuperService, public selectionService: SelectionService) {
    this.selectionService.nameSubject?.subscribe(selected => this.onCompChange(selected));
    this.onCompChange(selectionService.selected);
  }

  ngOnInit(): void {


  }


  /* generatePass(){    
    this.cPass= Math.random().toString(36).slice(2);
  } */

save(){

  this.superService.updateCompetition(this.comp).subscribe(res=>(console.log(res)));


}
onCompChange(selected: any): void {

  this.comp = selected;
  this.compReset=selected;
  console.log(this.comp.name);
}

}