import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Projects/zero-to-Hero-film-project/login/login.component';
import { HomeComponent } from './Projects/zero-to-Hero-film-project/home/home.component';
import { AuthGuard } from './Projects/zero-to-Hero-film-project/Guards/auth.guard';
import { MouviePageComponent } from './Projects/zero-to-Hero-film-project/Components/mouvie-page/mouvie-page.component';
import { ChartLayoutComponent } from './mini-projects/charts/chart-layout/chart-layout.component';
import { LineChartComponent } from './mini-projects/charts/line-chart/line-chart.component';
import { BarChartComponent } from './mini-projects/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './mini-projects/charts/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './mini-projects/charts/doughnut-chart/doughnut-chart.component';
import { PolarAreaChartComponent } from './mini-projects/charts/polar-area-chart/polar-area-chart.component';

const routes: Routes = [

  {path :"", redirectTo:"mouvie-project/login" , pathMatch:"full"},
  {path: "mouvie-project" ,  children:[
    {path:"login" , component:LoginComponent},
    {path: "home",component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'mouvie/:title' , component: MouviePageComponent },
    {path:"**" ,redirectTo:"login", pathMatch:"full" }
    
  ]},
  { path:'charts' ,component:ChartLayoutComponent, children:[
    {path:'line',component:LineChartComponent},
    {path:'bar',component:BarChartComponent},
    {path:'pie',component:PieChartComponent},
    {path:'doughnut',component:DoughnutChartComponent},
    {path:'polarArea',component:PolarAreaChartComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
