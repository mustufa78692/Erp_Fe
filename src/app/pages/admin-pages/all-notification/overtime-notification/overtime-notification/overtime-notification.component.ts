import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from "rxjs";
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-overtime-notification',
  templateUrl: './overtime-notification.component.html',
  styleUrls: ['./overtime-notification.component.scss']
})
export class OvertimeNotificationComponent implements OnInit {
  response: any = new Subject();
  public isLoading = new BehaviorSubject(true);
  constructor(private EmpService: ServicesService, private router: Router) {}
  getEmployeesOverTime() {
    this.isLoading.next(true);
    this.EmpService.getAllEmployeeOverTimeReq().subscribe((res) => {
      console.log(res)
      
      this.isLoading.next(false);
      this.response.next(res);
    });
  }

  delEmployee(email: string) {
    const formFileData = new FormData();
    formFileData.append("PersonalInfo", JSON.stringify({ status: "Inactive" }));

    this.EmpService.deleteEmployee(email, formFileData).subscribe((res) => {
      this.getEmployeesOverTime();
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
      this.getEmployeesOverTime();
    }
  }

  navigate(id: number): void {
    console.log(id);
    
    this.router.navigate([`update-overtime/${id}`]);
  }

  ngOnInit(): void {
    this.getEmployeesOverTime();
  }
}
