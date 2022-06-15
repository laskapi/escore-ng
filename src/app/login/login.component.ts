import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


	username: String = '';
	password: String = '';
	error: string = '';

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
	
		this.authService.logout();

	}

	doLogin() {
		if (this.username !== '' && this.username !== null && this.authService.validate(this.username)
			&& this.password !== '' && this.password !== null) {
			this.authService.login(this.username, this.password).subscribe({
				next: (authority) => {

					if (authority == 'SUPER') {
						this.router.navigate(['/super']);
					}
					if (authority == 'ADMIN') {
						this.router.navigate(['/admin']);
					}

				}, error: () => {
					this.error = 'Either invalid credentials or something went wrong';
				}
			});
		} else {
			this.error = 'Invalid Credentials';
		}
	}


}
