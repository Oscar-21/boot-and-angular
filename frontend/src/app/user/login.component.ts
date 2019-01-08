import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  credentials = { username: '', password: '' };

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router) {
  }

  login() {
    this.authService.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/events');
    });
    return false;
  }

}
