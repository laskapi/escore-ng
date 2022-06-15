import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';

import { AuthService } from '../service/auth.service';
import { SuperService } from '../service/super.service';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {

  competitions?: any[];


  constructor(private superService: SuperService) { }

  ngOnInit(): void {
    this.superService.getCompetitions().subscribe(data => this.competitions = data);


  }


  /* generatePass(){
    this.cPass= Math.random().toString(36).slice(2);
  } */

}
