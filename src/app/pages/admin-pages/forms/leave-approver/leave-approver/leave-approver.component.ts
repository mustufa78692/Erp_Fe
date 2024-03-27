import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-leave-approver',
  templateUrl: './leave-approver.component.html',
  styleUrls: ['./leave-approver.component.scss']
})
export class LeaveApproverComponent implements OnInit {
  getLevel:any
  myForm: FormGroup;
  aprroverData:any;
  getFirstAprroverEmail:any
  getSecondAprroverEmail:any

  getLocation:any

  constructor(private formBuilder: FormBuilder,private api:ServicesService,private router:Router ,private toastr: ToastrService) { }
public getData:any



  ngOnInit() {
this.api.get_all__job_levels().subscribe((successResponse)=>{
  this.getLevel=successResponse;
  console.log(this.getLevel);
});
    this.api.getAllApprover().subscribe((successResponse)=>{
      console.log(successResponse)
      this.getData=successResponse
    },((errorResponse)=>{
      console.log(errorResponse)
    }));

    this.api.getAllLocation().subscribe((successResponse)=>{
      console.log(successResponse)
      this.getLocation=successResponse;
    })

    this.api.getAllActiveEmployee().subscribe((successResponse:any)=>{
      this.aprroverData = successResponse;
      console.log(this.aprroverData[0].status)
      

    })
    this.myForm = this.formBuilder.group({
      firstApproverEmpId: [''],
      secondApproverEmpId: [''],
      startDate: [''],
      option:[[]],
      // dynamicFields: this.formBuilder.array([]),
      location:[''],
      // endDate:[null]
    });
  }


  getfirstAprroverEmplId(event:any){
    const empId=event.target.value
    console.log(empId);

    this.api.searchEmployeeById(empId).subscribe((successResponse:any)=>{
      console.log(successResponse.email)
      this.getFirstAprroverEmail=successResponse.email
      console.log(this.getFirstAprroverEmail)
    })

  }
  getSecondAprroverEmplId(event:any){
    const empId=event.target.value
    console.log(empId);

    this.api.searchEmployeeById(empId).subscribe((successResponse:any)=>{
      console.log(successResponse.email)
      this.getSecondAprroverEmail=successResponse.email
    })

  }



  get dynamicFields() {
    return this.myForm.get('dynamicFields') as FormArray;
  }

  addDynamicField() {
    console.log('addDynamicField');
    this.dynamicFields.push(this.formBuilder.control(''));
  }

  removeDynamicField(index: number) {
    this.dynamicFields.removeAt(index);
  }


  // onchange(event :any){
  //   console.log(event.target.values)
  // }





  onSubmit() {
    console.log(this.myForm.value.option);
if(this.myForm.valid) {
  let formData={
    firstApproverEmpId:this.myForm.value.firstApproverEmpId,
    firstApproverEmail:this.getFirstAprroverEmail,
    secondApproverEmpId:this.myForm.value.secondApproverEmpId,
    secondApproverEmail:this.getSecondAprroverEmail,
    startDate:this.myForm.value.startDate,
    approverLevels:this.myForm.value.option,
    locations:[
      {
      
      locationId:this.myForm.value.location
      }
    ]
  }
  console.log(formData)
  // let formDataJson = JSON.stringify(formData);
// console.log(formDataJson);

  this.api.add_approver(formData).subscribe((successResponse)=>{
    console.log(successResponse)
    this.toastr.info("Suceessfully Done")
    window.location.reload();
    // this.router.navigate(['/forms'])

  },((errorResponse)=>{
    console.log(errorResponse)
  })
  )
}else{
  alert("form is not valid ")
}
  
    // Add your form submission logic here
  }




  editData(firstApproverId:any,secondApproverId:any,locationId:any,startDate:any,laid:any){
    console.log(firstApproverId,secondApproverId,locationId,startDate)
    this.router.navigate([`forms/update-LeaveApprover/${firstApproverId}/${secondApproverId}/${locationId}/${startDate}/${laid}`]);
  }
}
