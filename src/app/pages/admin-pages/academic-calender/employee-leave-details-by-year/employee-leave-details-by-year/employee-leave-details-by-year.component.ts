import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-employee-leave-details-by-year',
  templateUrl: './employee-leave-details-by-year.component.html',
  styleUrls: ['./employee-leave-details-by-year.component.scss']
})
export class EmployeeLeaveDetailsByYearComponent implements OnInit {

  myForm: FormGroup;
  years: number[] = [];
  employessId:any=[];
  getCountry:any=[]
  tableData:any;
  // employeeIds = [135988, 123456, 789012]; // Example employee IDs
  // countries = ['India', 'USA', 'Canada']; // Example countries

  constructor(private formBuilder: FormBuilder,private api:ServicesService) {}

  private initializeYears() {
    const currentYear = new Date().getFullYear();
    for (let year = 2019; year <= currentYear; year++) {
      this.years.push(year);
    }
  }

  ngOnInit() {

    this.api.getAllActiveEmployee().subscribe((successsResponse)=>{
      this.employessId=successsResponse
      console.log(this.employessId);
    })


    this.api.get_all_holidays().subscribe((successResponse)=>{
      console.log(successResponse);
      this.getCountry=successResponse
    })
    

    this.initializeYears();
    this.myForm = this.formBuilder.group({
      employeeId: [''],
      year: [''],
      month: [''],
      country: ['']
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
    // console.log(this.myForm.value.month);
    // let month=this.myForm.value.month.slice(5);
    // let year=this.myForm.value.month.slice(0,4);
    // console.log(year,"year")
    // console.log(month,"month")
    // console.log(this.myForm.value.employeeId)
    // let empId=this.myForm.value.employeeId
    // console.log(empId,"empId")
    // console.log(year)
    // console.log(month)
    // let country=this.myForm.value.country
    // console.log(country)
    // this.api.get_employee_with_leaveReason(empId,year,month,country).subscribe((successResponse)=>{
    //   console.log(successResponse)
    //   this.tableData=successResponse
    // },((err)=>{
    //   console.log(err)
    // }))
  }


}
