import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  pieChartData= {
    labels: ['sun','mon','tue','wed','thu','fri','sat'],
    datasets:[
     {
       data:[90,80,120,60,50,140,130],
      label:'Scond Label',
      backgroundColor:[
        'red',
        'blue',
        'green',
        'orange',
        'violet',
        'yellow',
        'aqua',
      ]
    }
    ]
  }
}
