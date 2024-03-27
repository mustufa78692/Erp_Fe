import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-leave-details-employee',
  templateUrl: './leave-details-employee.component.html',
  styleUrls: ['./leave-details-employee.component.scss']
})
export class LeaveDetailsEmployeeComponent implements OnInit {
// obj:any;
LeaveForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private api: ServicesService,
    private router: Router) {
    
     }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    console.log(id);
    this.api.getLeaveFormDetailsByleaveForm_id(id).subscribe((res) => {
      this.obj = res;
      console.log(this.obj);

      
    });


  }
  public obj:any={
    "leaveRequestId": 2,
    "employeeId": 147743,
    "nameOfEmployee": "John Doe",
    "designation": "Manager",
    "department": null,
    "jobLevel": "Level1",
    "location": "1",
    "numberOfDaysRequested": 2.0,
    "leaveReason": "qwmdoijojdioiow1dj` jniowswqsj",
    "requestDate": "2023-10-30",
    "startDate": "2023-11-30",
    "endDate": "2023-12-10",
    "approvingManagerName": null,
    "approvalStatus": "Pending",
    "approvalRemarks": "Furqan ki shadi Hai ",
    "managerEmail": null,
    "hrName": null,
    "hrApprovalStatus": "Pending",
    "hrApprovalRemarks": null,
    "hrEmail": null,
    "email": "syedmustufahussain961@gmail.com",
    "contactNumber": "123-456-7890",
    "emergencyContactNumber": "987-654-3210",
    "medicalDocumentsName": null,
    "noOfLeavesApproved": 2.0,
    "approvedStartDate": null,
    "approvedEndDate": null,
    "medicalDocumentData": null,
    "leaveType": {
        "leaveTypeId": 1,
        "leaveName": "Medical",
        "leaveDays": 15.0
    }
}
  
//   ={"employeeId" : "1002",
//   "nameOfEmployee": "YourEmployeeName",
// "email": "employee@example.com",
// "contactNumber": "1234567890",
// "emergencyContactNumber": "9876543210",
// "designation": "Employee Designation",
// "department": "Employee Department",
// "requestDate": "2023-10-10",
// "leaveType": "Vacation",
// "leaveReason": "Vacation Reason",
// "startDate": "2023-10-15",
// "endDate": "2023-10-20",
// "approvalStatus" : "Rejected",
// "numberOfDaysRequested": 6,
// "approvingManagerName": "Furqan Khan",
// "approvalRemarks": "Ok"

// }
public initLeaveForm() {
  this.LeaveForm = this.formBuilder.group({
    employeeId: [this.obj?.employeeId],
    nameOfEmployee: [this.obj?.namePrefix +this.obj?.firstName+this.obj?.middleName+this.obj?.lastName],
    email: [this.obj?.email],
    contactNumber: [`${this.obj?.phoneCode} ${this.obj?.personalContactNo}`],
    designation: [this.obj?.jobDetails[0]?.jobPostDesignation],
    department: [this.obj?.department?.departmentName],
    emergencyContactNumber: [''],
    requestDate: [new Date().toISOString().substring(0, 10)],
    leaveType: [''],
    medicalDocumentsName: [''],
    leaveReason: [''],
    startDate: [''],
    endDate: [''],
    numberOfDaysRequested: [''],
    approvalStatus: ['Pending'],
    approvingManagerName: [null],
    approvalRemarks: [null],
    jobLevel: [this.obj?.jobDetails[0]?.jobLevel],
    location: [this.obj?.jobDetails[0]?.postedLocation],
    managerEmail: [null],
    hrName: [null],
    hrApprovalStatus:[null] ,
  hrApprovalRemarks:[null],
    hrEmail: [null]
  });
}
  

 public navigate(id: string) {
    this.router.navigate([`/approval-leave-form/${id}`]);
  }

}
