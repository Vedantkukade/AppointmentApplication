import { Component,OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  Highcharts: typeof Highcharts = Highcharts;
  patients!:Highcharts.Options

  ngOnInit(): void {



  this.patients={
    chart: {
            type: 'spline'
        
  },
  title:{
    text:'Patients Data'
  },
  xAxis: {
    title:{
        text:'Days of Week'
    },
      categories: ['Aug 07','Aug 08','Aug 09','Aug 10','Aug 11','Aug 12','Aug 13'],
      accessibility: {
          description: 'Days of Week'
      }
  },
  yAxis: {
      title: {
          text: 'Number of Patients'
      }
  },
  plotOptions: {
      spline: {
          marker: {
              radius: 5,
              lineColor: '#666666',
              lineWidth: 1
          }
      }
  },
  credits: {
    enabled: false
},
  series: [{
      name: 'Diabetology',
      color: '#FF0000',
      marker: {
          enabled:false
      },
      data: [0,2,4,5,2,1,0],
      lineWidth:2

  }, {
      name: 'Orthopedics',
      color: '#FFA500',
      marker: {
          enabled:false
      },
      data: [3,2,1,0,5,2,4],
      lineWidth:2
  },
{
    name:'Cardiology',
    color: '#008000',
    marker:{
        enabled:false,
       
    },
   
    data:[0,4,5,2,6,4,1],
    lineWidth:2
}
] as any


  }
    
    
  }

  

}
