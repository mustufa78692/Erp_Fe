import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-shift-assign',
  templateUrl: './shift-assign.component.html',
  styleUrls: ['./shift-assign.component.scss']
})
export class ShiftAssignComponent implements OnInit {

  assignmentData :any
  shiftDatas:any;
  employees:any
  shiftForm: FormGroup;
  minDate:any;
  constructor(private router:Router,private api :ServicesService,private toastr: ToastrService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.minDate = new Date().toISOString().split('T')[0];
    console.log(this.minDate);
    this.getAllemployeeShift()
    this.api.getAllShift().subscribe((successResponse:any)=>{
      console.log(successResponse);
      this.toastr.success('SuccessFully Fetch Shifts');
      this.shiftDatas=successResponse.reverse();
          },((errorResponse)=>{
            this.toastr.error('Shift Not Added ');
            console.log(errorResponse)
          }))


          this.api.getAllActiveEmployee().subscribe((successResponse)=>{
            this.employees=successResponse
            console.log(this.employees)
          },(errorResponse)=>{

          })


          this.initshiftForm()
  }


public getAllemployeeShift(){
  this.api.getAllemployeeShift().subscribe((successResponse)=>{
console.log(successResponse)
this.assignmentData=successResponse
  },(errorResponse)=>{

  })
}


  initshiftForm(){
    this.shiftForm = this.fb.group({
      assignedOn: [new Date().toISOString().substring(0, 10)],
      startDate: [''],
      endDate: [''],
      employeeId: [''],
     
      shift: ['']
    });
  }

  onSubmit() {
    console.log(this.shiftForm.value);
    if (this.shiftForm.valid) {
      // Your code here

      let sendData={
        assignedOn: this.shiftForm.value.assignedOn,
        "startDate": this.shiftForm.value.startDate,
        "endDate": this.shiftForm.value.endDate,
        "employeeId":this.shiftForm.value.employeeId,
        "shift": {
          "shiftId": this.shiftForm.value.shift
        }
      }
this.api.assignShift(sendData).subscribe((successResponse)=>{
  this.toastr.success('SuccessFully Assign Shifts');
    // Reset the form
    this.shiftForm.reset();

},(erorResponse)=>{
  this.toastr.success('Something Went Wrong !');
  this.shiftForm.reset();

})

    }
    
  }


  navigate(id:any){
    console.log('navigaate',id);
    this.router.navigate([`forms/update-shift-assign/${id}`]);

  }
}
