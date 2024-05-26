import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, map, of } from 'rxjs';

@Component({
  selector: 'app-working-rjxs',
  templateUrl: './working-rjxs.component.html',
  styleUrls: ['./working-rjxs.component.scss']
})
export class WorkingRjxsComponent implements OnInit {

  bs = new BehaviorSubject<any|null>(null)
  users = {
    data:[
      { id: "1", name: "khalid", age: 23, state: "celibataire" }
      , { id: "2", name: "karim", age: 21, state: "celibataire" }
      , { id: "3", name: "samir", age: 25, state: "celibataire" }
      , { id: "4", name: "walid", age: 28, state: "mariee" }
      , { id: "5", name: "abdou", age: 19, state: "celibataire" }
    ]
  }

  users$ = of(this.users)    
  // users$ = of(this.users).pipe(map(el=>el.data))    // of() to create an Observable from a data 
                                                    // map() to map every element and write Js inside of the Observable 
  // fitredUsers$ = this.users$.pipe(filter(res=>res.every(el=>el.age>0))) //filter() the Observable is not subscribing to it if the return of filter is false if all true then it will works
  ngOnInit() {

    setTimeout(()=>{  // i have the data coming from server with subscibe i set the bata to my BehaviosSubject with .next()
      this.users$.subscribe(res=>{
        this.bs.next(res)
      })

    },3000)


    this.bs.subscribe(res=>{
      console.log(res);
    })
  }
}
