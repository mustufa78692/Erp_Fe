import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details-payroll',
  templateUrl: './employee-details-payroll.component.html',
  styleUrls: ['./employee-details-payroll.component.scss']
})
export class EmployeeDetailsPayrollComponent implements OnInit {
  public selectedTab: string = 'personalDetails';
  constructor() { }

  ngOnInit(): void {
  }

}
