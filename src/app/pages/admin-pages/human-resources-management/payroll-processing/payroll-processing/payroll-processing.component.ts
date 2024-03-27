import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ServicesService } from "src/app/services/services.service";
import { Subject, BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-payroll-processing',
  templateUrl: './payroll-processing.component.html',
  styleUrls: ['./payroll-processing.component.scss']
})
export class PayrollProcessingComponent implements OnInit {
  employeeId:any
  selectedMonth:any
  sendMonth:any
  sendyear:any
  response: any = new Subject();
  public isLoading = new BehaviorSubject(true);
  constructor(private EmpService: ServicesService, private router: Router) {}

  getEmployees() {


    this.isLoading.next(true);
    this.EmpService.getAllEmployees().subscribe((res) => {
      this.isLoading.next(false);
      this.response.next(res);
    });
  }

  search(){
    console.log(this.selectedMonth)
    const parts = this.selectedMonth.split('-');
    this.sendMonth=parts[0]
    this.sendyear=parts[1]
  console.log(this.sendMonth,this.sendyear,this.employeeId)
  // this.services.payrollDetailsEmployee(this.employeeId,this.sendyear,this.sendMonth).subscribe((success)=>{
  //   console.log(success)
    
  // })
  
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

  searchEmpByEmail(email: any): void {
    this.isLoading.next(true);
    if (email) {
      this.EmpService.searchEmployeeByEmail(email).subscribe((res) => {
        let responseArray = [res];
        this.isLoading.next(false);
        this.response.next(responseArray);
      });
    } else {
      this.getEmployees();
    }
  }

  navigate(id: number): void {
    this.router.navigate([`employee-details-payroll/${id}`]);
  }

  ngOnInit(): void {
    this.getEmployees();
    console.log("sdljkklsdfjhjefhjkheqfjkh")
  }
}
