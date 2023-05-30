import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MouviePageComponent } from "./Components/mouvie-page/mouvie-page.component";
import { AuthGuard } from "./Guards/auth.guard";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";


const routes:Routes =[
    {path :"", redirectTo:"mouvie-project/login" , pathMatch:"full"},
    {path:"login" , component:LoginComponent},
    {path: "home",component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'mouvie/:title' , component: MouviePageComponent },
    {path:"**" ,redirectTo:"login", pathMatch:"full" }
] 
@NgModule({
    imports:[ RouterModule.forChild(routes) ],
    declarations:[],
    exports:[RouterModule],
})

export class mouvieProjectRoutingModule{}