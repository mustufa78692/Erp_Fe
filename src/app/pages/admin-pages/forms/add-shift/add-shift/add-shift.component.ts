import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.scss']
})
export class AddShiftComponent implements OnInit {

  shiftForm: FormGroup;

  shiftDatas:any

  constructor(private toastr: ToastrService,private formBuilder: FormBuilder,private api:ServicesService ,private router:Router ) {}

  ngOnInit() {
    this.initForm();
    this.api.getAllShift().subscribe((successResponse:any)=>{
console.log(successResponse);
this.toastr.success('SuccessFully Fetch Shifts');
this.shiftDatas=successResponse.reverse();
    },((errorResponse)=>{
      this.toastr.error('Shift Not Added ');
      console.log(errorResponse)
    }))


  }

  initForm() {
    this.shiftForm = this.formBuilder.group({
      shiftName: [''],
      shiftStartTime: [''],
      shiftEndTime: ['']
    });
  }

  onSubmit() {
    if (this.shiftForm.valid) {
      console.log(this.shiftForm.value);
      this.api.addShift(this.shiftForm.value).subscribe((successResponse)=>{
console.log(successResponse)
this.toastr.success("SuccessFully Added The Shift !")
window.location.reload();
      },((errorResponse)=>{
        console.log(errorResponse)
        this.toastr.error("Something Went Wrong !")
      }))


      // process the form data
    }
  }

  editData(id:any,shiftName:any,shiftStartTime:any,shiftEndTime:any){
    console.log(id,shiftName,shiftStartTime,shiftEndTime)
    this.router.navigate([`forms/update-shift/${id}/${shiftName}/${shiftStartTime}/${shiftEndTime}`])

  }
}
