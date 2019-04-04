import { Component, OnInit } from '@angular/core';
//import  data from './../data.json'

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor() {
    

    
   
   }

  ngOnInit() {
   /* let cursos3=data.hits.hits.map((elm)=>{
    
      return   elm.source*/
       }

  public doughnutchartOptions={
    scaleShowVerticalLines: false,
    responsive:true
  };

  public doughnutChartLabels =['EDA','EB','PB','PAV',''];
  public doughnutChartType= 'doughnut';
  
  public doughnutChartData = [120,130,200,80]

  


}
