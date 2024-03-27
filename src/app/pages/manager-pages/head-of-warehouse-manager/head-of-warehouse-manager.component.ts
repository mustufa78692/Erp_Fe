import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../../variables/charts";
import { ServicesService } from 'src/app/services/services.service';
import { BehaviorSubject, Subject } from 'rxjs';
@Component({
  selector: 'app-head-of-warehouse-manager',
  templateUrl: './head-of-warehouse-manager.component.html',
  styleUrls: ['./head-of-warehouse-manager.component.scss']
})
export class HeadOfWarehouseManagerComponent implements OnInit {

  response: any = new Subject();
  public isLoading = new BehaviorSubject(true);

  constructor(private services : ServicesService){}

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  ngOnInit() {

    console.log('dashboard ngonit');
    console.log(this.services.getRole());
    
    
    this.services.dashboard().subscribe( (result:any) =>{
      console.log(result);
      
    } )

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }



  public searchEmpByEmail(event: any) {
    
  }
}
