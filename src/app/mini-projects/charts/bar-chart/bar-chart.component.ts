import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  barChartData= {
    labels: ['sun','mon','tue','wed','thu','fri','sat','sd'],
    datasets:[
     {
       data:[90,80,120,60,50,140,130,68],
      label:'Scond Label',
      backgroundColor:'rgba(200,29,1,.6)',
      hoverBackgroundColor:"rgba(200,29,1,1)",
      borderColor:"black"
    },
    {
      data:[34,43,40,10,150,144,23,132],
     label:'Fisrt Label',
     borderColor:"black"
   }
    ]
  }
}
