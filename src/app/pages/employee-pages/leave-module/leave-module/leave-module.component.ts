import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-leave-module',
  templateUrl: './leave-module.component.html',
  styleUrls: ['./leave-module.component.scss']
})
export class LeaveModuleComponent implements OnInit {

  // leaves = [
  //   {
  //     dateOfLeave: new Date('2023-01-10'),
  //     startDate: new Date('2023-01-10'),
  //     endDate: new Date('2023-01-15'),
  //     reasonOfLeave: 'Personal',
  //     approvingManager: 'John Doe'
  //   },
  //   {
  //     dateOfLeave: new Date('2023-01-10'),
  //     startDate: new Date('2023-01-10'),
  //     endDate: new Date('2023-01-15'),
  //     reasonOfLeave: 'Personal',
  //     approvingManager: 'John Doe'
  //   },
  //   {
  //     dateOfLeave: new Date('2023-01-10'),
  //     startDate: new Date('2023-01-10'),
  //     endDate: new Date('2023-01-15'),
  //     reasonOfLeave: 'Personal',
  //     approvingManager: 'John Doe'
  //   },
  //   {
  //     dateOfLeave: new Date('2023-01-10'),
  //     startDate: new Date('2023-01-10'),
  //     endDate: new Date('2023-01-15'),
  //     reasonOfLeave: 'Personal',
  //     approvingManager: 'John Doe'
  //   },
  //   {
  //     dateOfLeave: new Date('2023-01-10'),
  //     startDate: new Date('2023-01-10'),
  //     endDate: new Date('2023-01-15'),
  //     reasonOfLeave: 'Personal',
  //     approvingManager: 'John Doe'
  //   },
  //   {
  //     dateOfLeave: new Date('2023-01-10'),
  //     startDate: new Date('2023-01-10'),
  //     endDate: new Date('2023-01-15'),
  //     reasonOfLeave: 'Personal',
  //     approvingManager: 'John Doe'
  //   },
  //   {
  //     dateOfLeave: new Date('2023-01-10'),
  //     startDate: new Date('2023-01-10'),
  //     endDate: new Date('2023-01-15'),
  //     reasonOfLeave: 'Personal',
  //     approvingManager: 'John Doe'
  //   },
  //   // ... more leave records
  // ];
  // page = 1;
  // pageSize = 5;

  myForm: FormGroup;
  years: number[] = [];
  employessId:any=[];
  getCountry:any=[]
  tableData:any;
  // employeeIds = [135988, 123456, 789012]; // Example employee IDs
  // countries = ['India', 'USA', 'Canada']; // Example countries

  constructor(private formBuilder: FormBuilder,private api:ServicesService,private router:Router) {}

  private initializeYears() {
    const currentYear = new Date().getFullYear();
    for (let year = 2019; year <= currentYear; year++) {
      this.years.push(year);
    }
  }
  emp_id:any
  ngOnInit() {
    const token=this.api.getToken()
    if (token) {
      const decodedToken: any = jwtDecode(token);
      // console.log(decodedToken.sub)
      const get_emp = decodedToken.sub; 
      console.log(get_emp) // Assuming 'id' is the property in the decoded token
      this.emp_id=get_emp

    } else {
      console.error('Token not found.');
    }

    this.api.getAllActiveEmployee().subscribe((successsResponse)=>{
      this.employessId=successsResponse
      console.log(this.employessId);
    })


    // this.api.get_all_holidays().subscribe((successResponse)=>{
    //   console.log(successResponse);
    //   this.getCountry=successResponse
    // })
    

    this.initializeYears();
    this.myForm = this.formBuilder.group({
      employeeId: [this.emp_id],
      year: [''],
      month: [''],
      country: ['India']
    });
  }

  onSubmit(){
    console.log(this.myForm.value);

let empId=this.myForm.value.employeeId;
let year=this.myForm.value.year;
let country=this.myForm.value.country;
console.log(empId,"employeeid",year,"year",country,"country");
this.api.get_employee_with_leaveDetails_year(empId,year,country).subscribe((successResponse)=>{
console.log(successResponse)
this.tableData = successResponse
},((errorResponse)=>{
  console.log(errorResponse)
}))
  }


  navigate(){
    console.log("navigate")
    this.router.navigate(['own-leave-details-byDate'])
  }

}
