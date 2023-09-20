import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { loginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Password:string
  Email:string

  constructor(private router:Router , private toastr: ToastrService , private loginService : loginService){

  }

  login(){
    this.loginService.login(this.Email,this.Password).then((userCredential) => {
      
      const user = userCredential.user;
      this.router.navigate(['/'])
      
    })
    .catch((error) => {
      this.toastr.error(error,"Error",{
        timeOut:4000
      })
    });

  }

}
