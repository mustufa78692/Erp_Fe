import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from "rxjs";
// import { ServicesService } from 'src/app/services/services.service';
import { Router } from "@angular/router";
import { ServicesService } from "src/app/services/services.service";
@Component({
  selector: 'app-pending-leave-notification-hr',
  templateUrl: './pending-leave-notification-hr.component.html',
  styleUrls: ['./pending-leave-notification-hr.component.scss']
})
export class PendingLeaveNotificationHrComponent implements OnInit {

  response: any = new Subject();
  public isLoading = new BehaviorSubject(true);
  constructor(private EmpService: ServicesService, private router: Router) {}
  getEmployees() {
    this.isLoading.next(true);
    this.EmpService.getAllLeave_for_pending().subscribe((res:any) => {
      console.log(res[0].approvalStatus)

      if(res[0].approvalStatus=="Accepted"){
        this.isLoading.next(false);
      this.response.next(res);

      }
      
    });
  }

  // getEmployees() {
  //   this.isLoading.next(true);
  //   this.EmpService.getAllLeave_for_pending().subscribe(
  //     (res: any) => {
  //       // Check if 'res' is defined and has a property 'approvalStatus'
  //       if (res && res.hasOwnProperty('approvalStatus')) {
  //         console.log('Approval Status:', res.approvalStatus);
  //       } else {
  //         // Log the whole response to see what's in it if 'approvalStatus' is not found
  //         console.error('Response does not contain approvalStatus:', res);
  //       }
  //       this.isLoading.next(false);
  //       this.response.next(res);
  //     },
  //     (error) => {
  //       // Handle any errors from the API call
  //       console.error('An error occurred while fetching employee data:', error);
  //       this.isLoading.next(false);
  //     }
  //   );
  // }
  

  delEmployee(email: string) {
    const formFileData = new FormData();
    formFileData.append("PersonalInfo", JSON.stringify({ status: "Inactive" }));

    this.EmpService.deleteEmployee(email, formFileData).subscribe((res) => {
      this.getEmployees();
    });
  }

  // rejoinEmployee(email: string) {
  //   this.EmpService.rejoinEmployee(email).subscribe((res) => {
  //     this.getEmployees();
  //   });
  // }

  searchEmpByemployee_Id(id: any): void {
    this.isLoading.next(true);
    if (id) {
      this.EmpService.searchLeaveFormDetailsByemp_Id(id).subscribe((res) => {
        
        let responseArray = res;
        console.log(responseArray)
        this.isLoading.next(false);
        this.response.next(responseArray);
      // this.getEmployees();

      });
    } else {
      this.getEmployees();
    }
  }

  navigate(id: number): void {
    this.router.navigate([`employee-leave-details/${id}`]);
  }

  ngOnInit(): void {
    this.getEmployees();
  }

}
