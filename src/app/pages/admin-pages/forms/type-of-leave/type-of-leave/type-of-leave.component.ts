import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-type-of-leave',
  templateUrl: './type-of-leave.component.html',
  styleUrls: ['./type-of-leave.component.scss']
})
export class TypeOfLeaveComponent implements OnInit {
  leaveForm: FormGroup;
  public getData:any

  constructor(private formBuilder: FormBuilder, private service:ServicesService,private router:Router,private toastr: ToastrService) {}

  ngOnInit() {
    this.leaveForm = this.formBuilder.group({
      leaveName: ['', Validators.required],
      leaveDays: ['']
    });



    this.service.getAllLeaveType().subscribe((successResponse:any)=>{
      console.log(successResponse)
      this.getData=successResponse.reverse()

    },((errorResponse)=>{
      console.log(errorResponse)

    }))
  }

  onSubmit() {
    if (this.leaveForm.valid) {
      console.log(this.leaveForm.value.leaveName);
      // Additional submission logic here

      let formData={
        leaveName:this.leaveForm.value.leaveName,
        leaveDays:this.leaveForm.value.leaveDays

      }

      const formFileData = new FormData();
      formFileData.append('leaveType ', JSON.stringify(formData))
      this.service.addLeaveType(formFileData).subscribe((successResponse: any) => {
        // console.log("successfully")
        this.toastr.info("Suceessfully Done")
        window.location.reload();
             }, (errorResponse: any) => {
        // console.log(errorResponse)
        this.toastr.error("Something Went Wrong !")
        window.location.reload();
      })

    }


  }
}
