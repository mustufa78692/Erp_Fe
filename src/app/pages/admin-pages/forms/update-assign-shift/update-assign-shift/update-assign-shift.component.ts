import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-update-assign-shift',
  templateUrl: './update-assign-shift.component.html',
  styleUrls: ['./update-assign-shift.component.scss']
})
export class UpdateAssignShiftComponent implements OnInit {
updateForm: FormGroup;
minDate:any;
public  data:any
  constructor(private activateRoute:ActivatedRoute,private router:Router,private api :ServicesService,private toastr: ToastrService,private fb: FormBuilder)  { }

  ngOnInit(): void {

    this.minDate = new Date().toISOString().split('T')[0];
    console.log(this.minDate);
    this.initUpdateForm();
 
    let assignmentId=this.activateRoute.snapshot.params['id']
    console.log(assignmentId);
    this.api.getShiftByAssignmentId(assignmentId).subscribe((successResponse)=>{
console.log(successResponse  )
this.data=successResponse;
this.initUpdateForm()
    },((errorResponse)=>{

    }))
    

  }


  initUpdateForm(){
    this.updateForm = this.fb.group({
      assignedOn: [this.data?.assignedOn],
      assignmentId: [this.data?.assignmentId],
      deleted: [this.data?.deleted],
      employeeId: [this.data?.employeeId],
      endDate:[this.data?.endDate],
      shiftId: [this.data?.shift?.shiftId],
        shiftName: [this.data?.shift?.shiftName],
        shiftStartTime: [this.data?.shift?.shiftStartTime],
        shiftEndTime:[this.data?.shift?.shiftEndTime],
        startDate: [this.data?.startDate]
    })
  }

  onSubmit() {
    let sendData={
      assignmentId:this.updateForm.value.assignmentId,
      assignedOn:this.updateForm.value.assignedOn,
      startDate:this.updateForm.value.startDate,
      endDate:this.updateForm.value.endDate,
      employeeId:this.updateForm.value.employeeId,
      deleted:this.updateForm.value.deleted,
      shift:{
        shiftId:this.updateForm.value.shiftId,
        shiftName:this.updateForm.value.shiftName,
        shiftStartTime:this.updateForm.value.shiftStartTime,
        shiftEndTime:this.updateForm.value.shiftEndTime,
      }
    }
    console.log(this.updateForm.value);
    this.api.updatetheshiftassign(sendData).subscribe((successResponse)=>{
console.log(successResponse)
this.toastr.success("SuccessFully Update Shift Assignment")
this.router.navigate(['forms/shift-assign'])
    },((errorResponse)=>{
      this.toastr.error("Something Went Wrong !")
      console.log(errorResponse)
    }))
    // Here you can send the form data to your server or perform other actions
    // For example: this.api.updateAssignment(this.updateForm.value).subscribe(...)
  }



}
