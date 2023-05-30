import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartLayoutComponent } from './chart-layout/chart-layout.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { EchartRoseComponent } from './echart-rose/echart-rose.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { chartRoutingModule } from './chart-routing.module';



@NgModule({
  declarations: [
    PieChartComponent,
    DoughnutChartComponent,
    BarChartComponent,
    ChartLayoutComponent,
    EchartRoseComponent,
    LineChartComponent,
    PolarAreaChartComponent
  ],
  imports: [
    CommonModule,
    chartRoutingModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    })
  ],
  exports:[
  ]
})
export class ChartsModule { }
