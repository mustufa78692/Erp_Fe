import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-get-emp-attendance-by-month',
  templateUrl: './get-emp-attendance-by-month.component.html',
  styleUrls: ['./get-emp-attendance-by-month.component.scss']
})
export class GetEmpAttendanceByMonthComponent implements OnInit {

  form: FormGroup;
  serachByMonthObj:any
  empId:any

  constructor(private fb: FormBuilder,private api:ServicesService) { }

  ngOnInit(): void {

    this.api.getAllActiveEmployee().subscribe((sucessResponse)=>{
console.log(sucessResponse)
this.empId=sucessResponse
    },((errorResponse)=>{
      console.log(errorResponse)
    }))
    this.form = this.fb.group({
      monthInput: [''],
      dropdownInput: ['']
    });
  }

  onSubmit() {
    console.log(this.form.value);
    let id=this.form.value.dropdownInput
    console.log(id);
    const monthInputValue = this.form.value.monthInput; // "2024-02"
    const [year, month] = monthInputValue.split('-');
  
    console.log('Year:', year); // "2024"
    console.log('Month:', month); // "02"


    this.api.getAttedanceByMonth(id,year,month).subscribe((successResponse)=>{
      console.log(successResponse)
      this.serachByMonthObj=successResponse;
      window.location.reload();
    },((errorResponse)=>{
      console.log(errorResponse)
      alert('something went wrong')
    }))
  }

}
