import { Component } from '@angular/core';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.scss']
})
export class PolarAreaChartComponent {

  polarAreaChartData= {
    labels: ['sun','mon','tue','wed','thu','fri','sat'],
    datasets:[
     {
       data:[90,80,120,60,50,140,130],
      label:'Scond Label',
      cutout:'80%',
      backgroundColor:[
        'rgba(255, 0, 25, 0.4)',
        'rgba(0, 255, 25, 0.4)',
        'rgba(0, 25, 255, 0.4)',
        'rgba(67, 25, 255, 0.4)',
        'rgba(67, 25, 78, 0.4)',
        'rgba(10, 225, 178, 0.4)',
        'rgba(67, 155, 178, 0.4)',

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
