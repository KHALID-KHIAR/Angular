import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http:HttpClient){}
    nums:number[]=[0,1,2,3,4,5,6,7,8,9];
  body:any ;
  testInterceptor(){
     this.http.get("https://api.github.com/users").subscribe(
     (res)=>{
      console.log(res);
      this.body = res ;
    })


        
  }
}
