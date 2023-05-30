import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }

  isLoggin(){
    localStorage.setItem("isLogged","logeed")
    this.router.navigateByUrl("mouvie-project/home")
  }
  isLogOut(){
    localStorage.removeItem("isLogged")
    this.router.navigateByUrl("mouvie-project/login")
  }
}
