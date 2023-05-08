import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthIntercepteurService implements HttpInterceptor  {

  constructor(private authService:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.authService.getToken()

      if(true){
        req = req.clone({
          // setHeaders: { Authorization : `Bearer Test Token${token}` },
        })
      }
      else
      console.log("Token Not availeble");
      
      return next.handle(req) ;
  }
}
