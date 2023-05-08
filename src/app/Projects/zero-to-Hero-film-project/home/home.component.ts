import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  theatre_movie:any ;
  theatre_movie_url:string="../../../../assets/Data/theatre-movies.json" ;
  popular_movies:any ;
  popular_movies_url:string="../../../../assets/Data/popular-movies.json" ;
  trending_movies:any ;
  trending_movies_url:string="../../../../assets/Data/trending-movies.json" ;

constructor(private http:HttpClient){}

async ngOnInit() {
     this.theatre_movie =  await this.getMovies(this.theatre_movie_url)
     this.popular_movies = await this.getMovies(this.popular_movies_url)
     this.trending_movies = await this.getMovies(this.trending_movies_url)
     console.log(this.theatre_movie);
     
     
  }

   async getMovies(url:string){
    return   await this.http.get(url).toPromise()

    
  }
}
