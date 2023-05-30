import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MouvieDataService } from '../../services/mouvie-data.service';

@Component({
  selector: 'app-mouvie-page',
  templateUrl: './mouvie-page.component.html',
  styleUrls: ['./mouvie-page.component.scss']
})
export class MouviePageComponent implements OnInit{

  constructor(private data_mouvie:MouvieDataService){}

        title!:string
        rating!:string
        image!:string
  ngOnInit(): void {
    this.data_mouvie.getMouvieData().subscribe(
      (item)=>{
        console.log(item);
        
        this.title = item.title
        this.image = item.image
        this.rating= item.rating
      }
    )
  }
}
