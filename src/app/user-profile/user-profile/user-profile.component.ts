import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private toastr: ToastrService, private router: Router, private api: ServicesService) { }
  emp_id: number;
  ngOnInit(): void {
    
    // console.log(this.api.projectName)
    this.getempIdFromToken()
    // console.log(this.emp_id)
    this.api.getAllApprover().subscribe((successResponse: any) => {
      console.log(successResponse)
      successResponse.forEach((data: any) => {
        // console.log(data)
        if (data.firstApproverEmpId == this.emp_id || data.secondApproverEmpId == this.emp_id) {
          // console.log(data)
          this.api.getApproverDataById(this.emp_id).subscribe((successResponse: any) => {
            console.log(successResponse)

            let endDateNull = successResponse.filter((items) => {
              if (items?.endDate == null) {
                return items
              }
            })


            // console.log(endDateNull)

            let filteredEmployeeData = endDateNull[0].employeeData.filter(data => {
              return endDateNull[0].employeeNotifications.some(notification => notification.employeeId === data.employeeId);
            });
            console.log(filteredEmployeeData)

            filteredEmployeeData.forEach((item) => {
              this.toastr.info("please approve the leave " + "" + item.employeeId)
              // alert("please approve the leave "+ "" + item.employeeId)
            })
            // console.log(this.getFirstApproverData)





          })
        }

      })
    },)

  }
  public getempIdFromToken() {
    
    const token = this.api.getToken()
    if (token) {
      const decodedToken: any = jwtDecode(token);
      // console.log(decodedToken.sub)
      const employeeId = decodedToken.sub;
      // console.log(employeeId) // Assuming 'id' is the property in the decoded token
      this.emp_id = employeeId

    } else {
      console.error('Token not found.');
    }
  }

  navigateToPersonal() {
    this.router.navigate(['/personal'])
  }
  get_payroll() {
    console.log('get_payroll');
    this.router.navigate(['/emp_payroll']);
  }

  get_Leave_Module() {
    console.log("Entering leave")
    this.router.navigate(['/leave-module']);
  }
  get_Attendance() {
    console.log('getAttendance')
    this.router.navigate(['/time-off'])

  }
  getLeaveForm() {
    console.log("akdfjkh")
    this.router.navigate(['/form-to-fill/leaveform']);
  }
  // navigate_to_leave_form(){
  //   console.log("djhfkjadhj")
  //   this.router.navigate(['/form-to-fill/leaveform'])

  // }

}
