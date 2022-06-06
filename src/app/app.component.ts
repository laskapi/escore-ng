import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Escore';

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {

   
      if(!this.authService.isUserLoggedIn()){
        this.router.navigateByUrl('/login');
      }  
  }

  

}
