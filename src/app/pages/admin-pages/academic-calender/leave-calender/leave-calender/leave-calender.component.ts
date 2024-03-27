import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-leave-calender',
  templateUrl: './leave-calender.component.html',
  styleUrls: ['./leave-calender.component.scss']
})
export class LeaveCalenderComponent implements OnInit {
getData:any
getEmpData:any;
  constructor(private api:ServicesService) { }

  ngOnInit(): void {
    this.api.get_leave_calender().subscribe((successResponse) => {
      console.log(successResponse)
      this.getEmpData=successResponse[0]?.leaveEmployees
      this.getData=successResponse
    },
    ((errorResponse) => {
      console.log(errorResponse)
    }))

  }

}
