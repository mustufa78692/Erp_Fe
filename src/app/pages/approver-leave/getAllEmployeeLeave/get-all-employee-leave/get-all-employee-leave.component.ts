import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subject } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-get-all-employee-leave',
  templateUrl: './get-all-employee-leave.component.html',
  styleUrls: ['./get-all-employee-leave.component.scss']
})
export class GetAllEmployeeLeaveComponent implements OnInit {



   response: any = new Subject();
  emp_id:any;
  getData:any;
  public isLoading = new BehaviorSubject(true);
  constructor(private EmpService: ServicesService, private router: Router,private toastr: ToastrService) {}
  getEmployees() {
    const token=this.EmpService.getToken()
    if (token) {
      const decodedToken: any = jwtDecode(token);
      // console.log(decodedToken.sub)
      const get_emp = decodedToken.sub; 
      console.log(get_emp) // Assuming 'id' is the property in the decoded token
      this.emp_id=get_emp

    } else {
      console.error('Token not found.');
    }
    this.isLoading.next(true);
    this.EmpService.getAllApprover().subscribe((successResponse)=>{
      console.log(successResponse)
      this.EmpService.getAllApprover().subscribe((successResponse:any)=>{
        console.log(successResponse);
        this.getData=successResponse
        // console.log(this.emp_id)
        this.getData.forEach((data:any)=>{
          // console.log("inside the for each",data)
          // if(data.firstApproverEmpId==this.emp_id  ) {
          //   console.log("data.firstApproverEmpId",data.firstApproverEmpId)
          //   this.EmpService.getApproverDataById(this.emp_id).subscribe((successResponse:any)=>{
          //     console.log(successResponse);
  
          //   let endDateNull=  successResponse.filter((items)=>{
          //     if(items.endDate==null){
          //       return items
          //     }
  
          //     })
          //     console.log(endDateNull[0].employeeData)
          //     console.log(endDateNull[0].employeeNotifications)
          //   //   let filteredEmployeeData = endDateNull[0].employeeData.filter(data => {
          //   //     return endDateNull[0].employeeNotifications.some(notification => notification.employeeId === data.employeeId);
          //   // });
          //     let filteredEmployeeData = endDateNull[0].employeeNotifications.filter(data => {
          //       return endDateNull[0].employeeData.some(notification => notification.employeeId === data.employeeId);
          //   });
            
          //   // console.log(filteredEmployeeData);
          //  let filterByleaveDays=filteredEmployeeData.filter((employeeData) => {
          //     console.log(employeeData.noOfLeavesApproved)
              
          //     console.log(employeeData)
          //     return employeeData
              
          //   })


          
          //   let res=filterByleaveDays
          //   this.isLoading.next(false);
          //     this.response.next(res);
          //   })
    
    
          // }
           if (data.secondApproverEmpId==this.emp_id){
            console.log("data.second ***************",data.firstApproverEmpId)
            this.EmpService.getApproverDataById(this.emp_id).subscribe((successResponse:any)=>{
              console.log(successResponse);
  
            let endDateNull=  successResponse.filter((items)=>{
              if(items.endDate==null){
                return items
              }
  
              })
              console.log(endDateNull[0].employeeData)
              console.log(endDateNull[0].employeeNotifications)
              let filteredEmployeeData = endDateNull[0].employeeNotifications.filter(data => {
                return endDateNull[0].employeeData.some(notification => notification.employeeId === data.employeeId);
            });
            
            console.log(filteredEmployeeData);
           let filterByleaveDays=filteredEmployeeData.filter((employeeData) => {
              console.log(employeeData.noOfLeavesApproved,"********************",employeeData.approvalStatus)
              if(employeeData.noOfLeavesApproved>=3){
                if(employeeData.approvalStatus !="Pending"){
                  console.log(employeeData)
                  return employeeData
                }
             
              }
            })

            console.log(filterByleaveDays)
            let res=filterByleaveDays
            this.isLoading.next(false);
              this.response.next(res);
            })
    
    
          

          }
          
          
  
        })
        
        
      })
      
    })
    // this.EmpService.getAllLeave_for_pending().subscribe((res) => {
    //   this.isLoading.next(false);
    //   this.response.next(res);
    // });
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
    this.router.navigate([`getEmployeeLeaveUpdateFormBySecondApprover/${id}`]);
  }

  ngOnInit(): void {
    this.getEmployees();
  }

}
