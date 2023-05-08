import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Projects/zero-to-Hero-film-project/login/login.component';
import { HomeComponent } from './Projects/zero-to-Hero-film-project/home/home.component';

const routes: Routes = [

  {path: "film-project" ,children:[
    {path:"login" , component:LoginComponent},
    {path: "home",component: HomeComponent},
    {path:"**" ,redirectTo:"home", pathMatch:"full" }
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
