import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { AnyARecord } from 'dns';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-employees-leave-details-by-date',
  templateUrl: './employees-leave-details-by-date.component.html',
  styleUrls: ['./employees-leave-details-by-date.component.scss']
})
export class EmployeesLeaveDetailsByDateComponent implements OnInit {

  myForm: FormGroup;
  tableData:any;
  current_Date:any

  constructor(private formBuilder: FormBuilder,private api:ServicesService) {}

  ngOnInit() {


    this.myForm = this.formBuilder.group({
      dateField: ['']
    });
  }

  onSubmit() {
    // Handle form submission
    this.current_Date=this.myForm.value.dateField

    this.api.get_employees_with_leaveDetails_by_date(this.myForm.value.dateField).subscribe((successResponse)=>{
      console.log(successResponse)
      this.tableData = successResponse
      console.log(this.tableData.leaveApprovals)
      console.log(this.tableData.employeeIdCount)
    })
    console.log(this.myForm.value);
  }

}
