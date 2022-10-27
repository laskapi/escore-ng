import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router, private appComponent: AppComponent) { }

  username?: String | null;

  title = 'Escore ' + this.appComponent.version.toFixed(1);


  ngOnInit(): void {
    
    let user = sessionStorage.getItem(this.authService.USERNAME);
    this.username = user ? new String(user) : null;
    this.authService.usernameSubject.subscribe(val => this.username = val);
      
    if (!this.authService.getToken()) {
      this.router.navigateByUrl('/login');
    }
  }
  handleLogout() {

    this.router.navigateByUrl('/login');

  }
}
