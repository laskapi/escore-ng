import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout().subscribe((obs)=>
    console.log(""+obs.ttt));
 
}

}
