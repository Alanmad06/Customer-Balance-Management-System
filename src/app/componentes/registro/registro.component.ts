import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { loginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  Email : string
  Password : string
  Password2 : string
  cPassword:boolean

  constructor(private toastr: ToastrService , private router : Router ,private loginService : loginService){

  }

  registrarse(){

    if(this.Password===this.Password2){
      this.loginService.register(this.Email,this.Password).then(userCredential=>{
        this.cPassword=true
        this.router.navigate(['/'])
      }).catch((error) => {
        this.toastr.error(error,"Error",{
          timeOut:4000
        })
      });

      }else{
           this.cPassword=false


      }

    }

    passwordConfirm(): boolean{
      if(this.Password===this.Password2){
        return true
      }
      return false
    }
   
    
  }


