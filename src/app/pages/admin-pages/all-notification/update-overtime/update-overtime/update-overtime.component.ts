import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-overtime',
  templateUrl: './update-overtime.component.html',
  styleUrls: ['./update-overtime.component.scss']
})
export class UpdateOvertimeComponent implements OnInit {

  constructor( private formBuilder:FormBuilder,private service:ServicesService,    private route: ActivatedRoute,
    private router: Router,) {
      const id = this.route.snapshot.params["id"];
      console.log(id);
      console.log("whdjkjkwhd");
      
      this.service.getAttendanceByAttendanceById(id).subscribe((sucess)=>{
        this.data=sucess
        console.log(this.data)
      },(err)=>{
        console.log(err)
      })
     }
  updateOvertime:FormGroup;
  initUpdateOvertime(){
    this.updateOvertime= this.formBuilder.group({
      attendenceId:[this.data?.attendenceId],
      date:[this.data?.date],
      day:[this.data?.day],
      punchInTime:[this.data?.punchInTime],
      punchOutTime:[this.data?.punchOutTime],
      workingHours:[this.data?.workingHours],
      halfDay:[this.data?.halfDay],
      overTime:[this.data?.overTime],
      employeeId:[this.data?.employeeId],
      breaks:[this.data?.breaks],
      overtimeStatus:[this.data?.overtimeStatus]





    })
  }

  public data:any=
  {
    "attendenceId": 2,
    "date": "2023-11-21",
    "day": "TUESDAY",
    "punchInTime": "2023-11-22T14:24:40.549+00:00",
    "punchOutTime": "2023-11-22T14:25:08.253+00:00",
    "workingHours": 27703,
    "halfDay": true,
    "overTime": 0,
    "overtimeStatus": "PENDING",
    "employeeId": 115435,
    "breaks": []
    }

  ngOnInit(): void {
    // this.formatAttendanceData();
    this.initUpdateOvertime()
  }

  formatAttendanceData() {
    // Example: Convert punchInTime and punchOutTime to a more readable format
    this.data.punchInTime = new Date(this.data.punchInTime).toLocaleTimeString();
    this.data.punchOutTime = new Date(this.data.punchOutTime).toLocaleTimeString();
    // Add any other data processing here
  }
  submitRequest(){
    console.log(this.updateOvertime.value)
    this.service.getupdateOverTime(this.updateOvertime.value).subscribe((suceess)=>{
      console.log("Sucess")
      console.log(suceess)
    },(err)=>{
      console.log(err)

    })

    
  }

}
