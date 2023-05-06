import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http:HttpClient){}

  testInterceptor(){
     this.http.get("https://official-joke-api.appspot.com/random_joke").subscribe(
     (res)=>{
      console.log(res);
    //  body = res.
    })


        
  }
}
