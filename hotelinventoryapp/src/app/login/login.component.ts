import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: String = '';
  password: String = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'Admin') {
      //alert('Login Successful');
      this.router.navigate(['/rooms']);
    }
  }
}
