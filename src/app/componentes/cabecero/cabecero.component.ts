import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { loginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  isLoggedIn:boolean
  loggedInUser : string | null
  
  constructor(private loginService:loginService, private router : Router)
  {}

  ngOnInit(): void {
   
      this.loginService.getAuthState().subscribe(
      user => {
        if(user){
          this.isLoggedIn = true;
          this.loggedInUser = user.email;
         
        }else {
          this.isLoggedIn = false;
       
           
        }
      }
      );
      
    
  }

   
  

  logout(){
    this.loginService.logout()
    this.isLoggedIn=false
    this.router.navigate(['/login'])
  }

   
}
