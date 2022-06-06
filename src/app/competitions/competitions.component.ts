import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

   authority = 'no authority';

  constructor(/* private userService: UserService */) { }

  ngOnInit(): void {
    this.getAuthority();
  }

  getAuthority(): void {

//    this.userService.getAuthority().subscribe(auth=>this.authority=auth.authority);
  }
}
		