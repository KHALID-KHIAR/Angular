import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MouvieDataService } from '../../services/mouvie-data.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})

export class FilmComponent {
  @Input() image!:string
  @Input() title!:string ;
  @Input() rating!:string ;
  @Input() link!:string ;
  @Output() clickEvent = new EventEmitter()

  constructor(private route:Router,private data_mouvie:MouvieDataService){}
  handleClick(){
    this.data_mouvie.setMouvieData(this.title,this.rating,this.image)
    
    this.route.navigate(["mouvie-project/mouvie/"+this.title])
    this.clickEvent.emit(this.title)
  }
}
