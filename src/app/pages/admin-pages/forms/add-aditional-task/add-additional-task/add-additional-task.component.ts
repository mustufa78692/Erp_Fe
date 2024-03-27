import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-add-additional-task',
  templateUrl: './add-additional-task.component.html',
  styleUrls: ['./add-additional-task.component.scss']
})
export class AddAdditionalTaskComponent implements OnInit {
  tableData:any
  myForm: FormGroup;
  getEmp:any;
  getLocation:any;
  getDesignation:any;
  getaskId:any;
  emp_id:any


  constructor(private toastr: ToastrService,private formBuilder: FormBuilder,private api:ServicesService,private router:Router) { }

  ngOnInit() {


    this.api.get_all_task().subscribe((successResponse:any) => {
      console.log(successResponse)
      this.tableData = successResponse.reverse();
    })

    // let id =this.api.
    const token=this.api.getToken()
    if (token) {
      const decodedToken: any = jwtDecode(token);
      // console.log(decodedToken.sub)
      const get_emp = decodedToken.sub; 
      console.log(get_emp) // Assuming 'id' is the property in the decoded token
      this.emp_id=get_emp
      // let id =get_emp

    } else {
      console.error('Token not found.');
    }
    this.api.getAdditionalTaskByemp_id(this.emp_id).subscribe((sucessResponse)=>{
console.log(sucessResponse)
    },((errorResponse)=>{
      console.log(errorResponse)
    }))


    this.api.getAllLocation().subscribe((successResponse)=>{
      console.log(successResponse)
      this.getLocation=successResponse;
    });
    this.api.getAllActiveEmployee().subscribe((successResponse:any)=>{
      this.getEmp = successResponse;
      console.log(this.getEmp)
       });

       this.api.get_all_designation().subscribe((successResponse)=>{
        this.getDesignation=successResponse
        console.log(this.getDesignation)
      });
      this.api.get_all_task().subscribe((successResponse) => {
        console.log(successResponse)
        this.getaskId = successResponse;
      });


    this.myForm = this.formBuilder.group({
      empId: [''],
      startDate: [''],
      locationId: [''],
      designationId: [''],
      taskId: ['']
    });

    // You may need to fetch the dropdown options from a service
    // and populate them accordingly
  }

  onSubmit() {
    console.log(this.myForm.value);


    let formData={
      empId:this.myForm.value.empId,
      startDate:this.myForm.value.startDate,
      locationId:[this.myForm.value.locationId],
      designationId:[this.myForm.value.designationId],
      taskId:[this.myForm.value.taskId]
    }


    this.api.add_additional_task(formData).subscribe((successResponse)=>{
      console.log(successResponse)
      window.location.reload();
      this.toastr.success('SuccessFully Added  Additional Task');
    },((errorResponse)=>{
      this.toastr.error("Something Went Wrong !")
    }))
    
  }

  editData(id:any){
    console.log(id)
    this.router.navigate([`forms/getAdditionTaskByTaskId/${id}`])

  }

}
