import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { DoughnutChartComponent } from "./doughnut-chart/doughnut-chart.component";
import { EchartRoseComponent } from "./echart-rose/echart-rose.component";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { PolarAreaChartComponent } from "./polar-area-chart/polar-area-chart.component";
import { ChartLayoutComponent } from "./chart-layout/chart-layout.component";


const routs: Routes = [
    
    {path:'',component:ChartLayoutComponent,children:[
        {path:'line',component:LineChartComponent},
        {path:'bar',component:BarChartComponent},
        {path:'pie',component:PieChartComponent},
        {path:'doughnut',component:DoughnutChartComponent},
        {path:'polarArea',component:PolarAreaChartComponent},
        {path:'echartRose',component:EchartRoseComponent},
    ]},
]
@NgModule({
    imports:[
        RouterModule.forChild(routs)
    ],
    declarations:[],
    exports:[RouterModule]
})
export class chartRoutingModule { }