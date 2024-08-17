import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: String = '';
  password: String = '';

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'Admin') {
      alert('Login Successful');
    }
  }
}
