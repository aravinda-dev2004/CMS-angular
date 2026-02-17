import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginObj: any = {
    userName: "",
    password: ""
  };

  constructor(private router: Router) { }

  login() {
    if (this.loginObj.userName == "admin" && this.loginObj.password == "1234") {
      this.router.navigateByUrl("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  }
}
