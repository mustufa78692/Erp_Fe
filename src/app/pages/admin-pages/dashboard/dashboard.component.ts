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
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // constructor(private services : ServicesService){}
  constructor(private EmpService: ServicesService,) {}
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  response: any = new Subject();
  // getEmployees() {
  //     this.EmpService.getAllEmployees().subscribe((res) => {
  //     this.response.next(res);
    
  //   });
  // }


  getEmployees() {
    this.EmpService.getAllEmployees().subscribe((res:any) => {
        res.forEach(employee => {
          console.log("dkjkdhjkh")
            // Process each employee here
            console.log(employee.filledForm); // Example of processing: logging each employee
            // alert()
            if(employee.filledForm===true){
              // alert(employee.employeeId + "Onboard Approval Pending")
            }
        });
        // this.response.next(res);
    });
}

  ngOnInit() {
    this.getEmployees()

    console.log('dashboard ngonit');
    console.log(this.EmpService.getRole());
    
    
    this.EmpService.dashboard().subscribe( (result:any) =>{
      console.log(result);
      
    },((err)=>{
      console.log(err);
    }) )

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

}
