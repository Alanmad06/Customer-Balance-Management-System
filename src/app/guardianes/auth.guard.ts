import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { loginService } from "../servicios/login.service";
import { Auth } from "@angular/fire/auth";
import { Firestore } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { Observable } from "rxjs";

@Injectable()
export class authGuard {

    private auth : Auth = inject(Auth)
    

    constructor(
        private router : Router){
    
     }

     canActivate(): Promise<boolean>{
         return new Promise((resolve, reject)=>{ onAuthStateChanged(this.auth, (user)=>{
            if(!user){
                this.router.navigate(['/login'])
                reject( false)

            }else{
                resolve( true)
            }
        })
         
    })
        
        
    }

    
}