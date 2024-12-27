import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  myToken: any = "";
  role: any = "";
  
  constructor(private loginService: LoginService,private router: Router){}

  logIn() {
    //hit service
    this.loginService.signIn(this.loginForm.value).subscribe({
      next: (response) => {
        this.myToken = response.accessToken//local level
        console.log(this.myToken)
        //store in LS
    localStorage.setItem('token', this.myToken);
    const payload = JSON.parse(atob(this.myToken.split('.')[1]));
    console.log(payload)  
    const userRole = payload['role'];
    console.log(userRole[0].authority);
    if (userRole[0].authority === 'ROLE_ADMIN') {
      this.router.navigateByUrl('/adminDashboard');
    } else {
      this.router.navigateByUrl('/userDashboard');
    }
      },error:(err:HttpErrorResponse)=>{}});
}}

