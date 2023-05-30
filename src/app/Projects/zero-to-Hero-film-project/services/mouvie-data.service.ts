import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MouvieDataService {

  constructor() {}
  data={
    title:'',
    rating:'',
    image:""
  }
  
  getMouvieData():Observable<any>{
    return of(this.data)
  }
  setMouvieData(title:string,rating:string,image:string){
    this.data.rating=rating
    this.data.title = title
    this.data.image = image
  }
}
