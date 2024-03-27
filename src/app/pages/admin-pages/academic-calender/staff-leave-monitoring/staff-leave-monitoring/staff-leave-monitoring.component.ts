import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-staff-leave-monitoring',
  templateUrl: './staff-leave-monitoring.component.html',
  styleUrls: ['./staff-leave-monitoring.component.scss']
})
export class StaffLeaveMonitoringComponent implements OnInit {

  // leaveClandeer:any =[]
  
 
 
  // calendarEvents = this.leaveClandeer
  //   .filter(item => item.marked) // Filter only marked items
  //   .map(item => ({
  //     title: 'Marked',
  //     start: item.date,
  //     color: 'red' // Highlight color for marked dates
  //   }));

  // calendarOptions = {
  //   plugins: [dayGridPlugin],
  //   initialView: 'dayGridMonth',
  //   aspectRatio: 2 // Set the aspect ratio to 2:1 (width:height)
  // };

  // constructor(private api:ServicesService,private toastr: ToastrService) { 
  //   this.api.get_staff_leave_moniter().subscribe((successResponse:any)=>{
  //     console.log(successResponse)
  //     this.leaveClandeer=successResponse

  //   }, (errorResponse)=>{
  //     this.toastr.error("Something went wrong ! ")

  //   })
  // }

  // ngOnInit(): void {
  //   console.log(this.calendarEvents)
  


  // }



  leaveClandeer: any = [];
  calendarEvents: any = [];

  calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    aspectRatio: 2 // Set the aspect ratio to 2:1 (width:height)
  };

  constructor(private api: ServicesService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fetchStaffLeaveData();
  }

  fetchStaffLeaveData(): void {
    this.api.get_staff_leave_moniter().subscribe(
      (successResponse: any) => {
        console.log(successResponse);
        this.leaveClandeer = successResponse;
        this.updateCalendarEvents();
      },
      (errorResponse) => {
        this.toastr.error("Something went wrong !");
      }
    );
  }

  updateCalendarEvents(): void {
    this.calendarEvents = this.leaveClandeer
      .filter((item: any) => item.marked)
      .map((item: any) => ({
        title: 'Marked',
        start: item.date,
        color: 'red' // Highlight color for marked dates
      }));
    console.log(this.calendarEvents);
  }

}
