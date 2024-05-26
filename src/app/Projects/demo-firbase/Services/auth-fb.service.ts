import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthFBService {

  constructor(
    private authFire:AngularFireAuth
  ) { }

  signUp(email:string,password:string){
    return this.authFire.createUserWithEmailAndPassword(email,password);
    
  }
  signIn(email:string,password:string){
   return this.authFire.signInWithEmailAndPassword(email, password);
  }

  authState(){
    return this.authFire.authState ;
  }
}
