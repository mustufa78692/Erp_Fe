import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-get-emp-attendance-by-year',
  templateUrl: './get-emp-attendance-by-year.component.html',
  styleUrls: ['./get-emp-attendance-by-year.component.scss']
})
export class GetEmpAttendanceByYearComponent implements OnInit {

  form: FormGroup;
  empId:any;
  SearchByDateObj:any;
  constructor(private fb: FormBuilder,private api:ServicesService) { }

  ngOnInit(): void {

    this.api.getAllActiveEmployee().subscribe((sucessResponse)=>{
      console.log(sucessResponse)
      this.empId=sucessResponse
          },((errorResponse)=>{
            console.log(errorResponse)
          }))
    this.form = this.fb.group({
      requestStartDate: [''],
      requestEndDate: [''],
      requestId: ['']
    });
  }

  onSubmit() {
    console.log(this.form.value);

    this.api.getAttendanceByDate(this.form.value.requestStartDate,this.form.value.requestEndDate,this.form.value.requestId).subscribe((sucessResponse)=>{
console.log(sucessResponse)
this.SearchByDateObj=sucessResponse;
    },(errorResponse)=>{
      alert("something went wrong")
    })
  }

}
