import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {

  departmentForm: FormGroup;
  tableData:any;

  departId:number 
  constructor(private fb: FormBuilder,private api:ServicesService,private router:Router ,private activeRoute:ActivatedRoute,private toastr: ToastrService) {
// Assuming you've already injected ActivatedRoute into your component's constructor
let id=this.activeRoute.snapshot.params['id'];
console.log(id)
this.departId-=id
    this.api.getDepartByDepartmentId(id).subscribe((successResponse)=>{
console.log(successResponse)
this.tableData = successResponse
    },((errorResponse)=>{
      console.log(errorResponse)
    }))
  }

  ngOnInit() {


    this.departmentForm = this.fb.group({
      departmentName: [this.tableData?.departmentName]
    });
  }

  onSubmit() {
    
    console.log(this.departmentForm.value);
    this.api.upadteDepartment(this.tableData?.departmentId,this.departmentForm.value).subscribe((successResponse)=>{
      console.log(successResponse)
      this.router.navigate(['forms/add-department'])
      this.toastr.success("SuccessFully Update The Department !")
    },((errorrResponse)=>{
      console.log(errorrResponse)
      this.toastr.info("Something Went Wrong !")
      window.location.reload();
    }))
    // Here you can call a service method to handle your CRUD operation
  }

}
