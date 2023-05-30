import { Component } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent {

  doughnutChartData= {
    labels: ['sun','mon','tue','wed','thu','fri','sat'],
    datasets:[
     {
       data:[90,80,120,60,50,140,130],
      label:'Scond Label',
      cutout:'80%',
      backgroundColor:[
        'red',
        'blue',
        'green',
        'orange',
        'violet',
        'yellow',
        'aqua',
      ],
      hoverBackgroundColor:[
        'red',
        'blue',
        'green',
        'orange',
        'violet',
        'yellow',
        'aqua',
      ],
      hoverBorderColor:'black'
    }
    ]
  }
}
