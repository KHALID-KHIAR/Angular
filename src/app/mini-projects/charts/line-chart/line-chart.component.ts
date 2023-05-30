import { Component } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  constructor(){}

  lineChartData = {
    labels: ['sun','mon','tue','wed','thu','fri','sat','sd'],
    datasets :[
      {
        data:[90,80,120,60,50,140,130,68],
        label: "Sales Percent",
        fill:true,
        backgroundColor:'rgba(100,100,100,.2)',
        borderColor:'black'
        ,showLine:false
      },
      {
        data:[9,60,12,6,50,110,140,99],
        label: "Consomation",
        fill:true,
        tension:0.5
      },
      {
        data:[10,5,58,78,35,20,13,190],
        label: "Consomation",
        fill:true
      }
    ]
  }

}
