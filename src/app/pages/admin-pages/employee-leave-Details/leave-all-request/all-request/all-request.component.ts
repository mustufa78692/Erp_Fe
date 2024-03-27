// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from "rxjs";
// import { ServicesService } from 'src/app/services/services.service';
import { Router } from "@angular/router";
import { ServicesService } from "src/app/services/services.service";

@Component({
  selector: 'app-all-request',
  templateUrl: './all-request.component.html',
  styleUrls: ['./all-request.component.scss']
})
export class AllRequestComponent implements OnInit {
  response: any = new Subject();
  public isLoading = new BehaviorSubject(true);
  constructor(private EmpService: ServicesService, private router: Router) {}
  getEmployees() {
    this.isLoading.next(true);
    this.EmpService.getAllLeave().subscribe((res) => {
      this.isLoading.next(false);
      this.response.next(res);
    });
  }

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
