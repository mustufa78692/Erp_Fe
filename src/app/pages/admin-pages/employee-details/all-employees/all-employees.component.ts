import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ServicesService } from "src/app/services/services.service";
import { Subject, BehaviorSubject } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-all-employees",
  templateUrl: "./all-employees.component.html",
  styleUrls: ["./all-employees.component.scss"],
})
export class AllEmployeesComponent implements OnInit {
    response: any = new Subject();
    button:string = "Approved"
    selectedOption?: string 
    public isLoading = new BehaviorSubject(true);
    constructor(private EmpService: ServicesService, private router: Router , private toaster:ToastrService) {}

    getEmployees() {
      this.isLoading.next(true);
      this.EmpService.getAllEmployees().subscribe((res) => {
        console.log(res)
        
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

    // searchEmpByEmail(email: any): void {
    //   this.isLoading.next(true);
    //   if (email) {
    //     this.EmpService.searchEmployeeByEmail(email).subscribe((res) => {
    //       let responseArray = [res];
    //       this.isLoading.next(false);
    //       this.response.next(responseArray);
    //     },((errorResponse)=>{
    //       console.log(errorResponse)
    //     }));
    //   } else {
    //     this.getEmployees();
    //   }
    // }

    searchEmpByEmail(option: string, value: any): void {
      console.log(value)
      this.isLoading.next(true);
      switch (option) {
        case 'email':
          if (value) {
            console.log(value)
            this.EmpService.searchEmployeeByEmail(value).subscribe((res) => {
              let responseArray = [res];
              this.isLoading.next(false);
              this.response.next(responseArray);
            }, (errorResponse) => {
              // console.log(errorResponse.error.message);
              this.toaster.error(errorResponse.error.message)
              this.isLoading.next(false);
              
            });
          } else {
            this.getEmployees();
          }
          break;
        case 'id':
          console.log("inside the id ")

          if (value) {
            console.log(value)
            this.EmpService.searchEmployeeById(value).subscribe((res) => {
              let responseArray = [res];
              this.isLoading.next(false);
              this.response.next(responseArray);
            }, (errorResponse) => {
              // console.log(errorResponse.error.message);
              this.toaster.error(errorResponse.error.message)
              this.isLoading.next(false);
              
            });
          } else {
            this.getEmployees();
          }


          // Implement your logic for the 'id' case here
          break;
        default:
          // Default case if needed
          this.getEmployees();
          break;
      }
    }

    navigate(id: number): void {
      this.router.navigate([`employee-details/${id}`]);
    }

    ngOnInit(): void {
      this.getEmployees();
    }
}

