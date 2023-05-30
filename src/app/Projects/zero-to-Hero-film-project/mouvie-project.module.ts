import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { FilmComponent } from './Components/film/film.component';
import { MouviePageComponent } from './Components/mouvie-page/mouvie-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { mouvieProjectRoutingModule } from './mouvie-project-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    LoginComponent,
    FilmComponent,
    MouviePageComponent
  ],
  imports: [
    CommonModule,
    mouvieProjectRoutingModule,
    ReactiveFormsModule
  ]
})
export class MouvieProjectModule { }
