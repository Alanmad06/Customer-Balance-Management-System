import { Injectable, inject } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import { User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { BehaviorSubject, Observable, from } from "rxjs";


Injectable()
export class loginService{

    private auth : Auth = inject(Auth)
    private authStateSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

    constructor(){

      this.onAuthStateChange();
        

    }

    login(user :string , password:string){
        return signInWithEmailAndPassword(this.auth,user,password)
    }

    logout(){
        this.auth.signOut()
    }
    
    register(user :string , password:string){
      return createUserWithEmailAndPassword(this.auth,user,password)
      
  }

    private onAuthStateChange(): void {
      onAuthStateChanged(this.auth, (user) => {
        this.authStateSubject.next(user);
      });
    }
    
    
     getAuthState(): BehaviorSubject<User | null> {
     return this.authStateSubject;
    }



}