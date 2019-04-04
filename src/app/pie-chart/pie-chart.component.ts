import { Component, OnInit } from '@angular/core';
import {ChartapiService} from './../services/chartapi.service';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public piechartOptions={
    scaleShowVerticalLines: false,
    responsive:true
  };


  public pieChartLabels =['Sales Q1','Sales Q2','Sales Q3','Sales Q4'];
  public pieChartType= 'pie';
  
  public pieChartData = [120,130,200,80]

}
