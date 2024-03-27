import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-add-designation-form',
  templateUrl: './add-designation-form.component.html',
  styleUrls: ['./add-designation-form.component.scss']
})
export class AddDesignationFormComponent implements OnInit {

  // form: FormGroup;

  // constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.initForm();
  // }

  // initForm() {
  //   this.form = this.fb.group({
  //     joblevelId: [1, Validators.required],
  //     designationName: this.fb.array([
  //       this.fb.control('')
  //     ]) // Dynamic array for designationName
  //   });
  // }

  // get designationName() {
  //   return this.form.get('designationName') as FormArray;
  // }

  // addDesignation() {
  //   this.designationName.push(this.fb.control('', Validators.required));
  // }

  // removeDesignation(index: number) {
  //   this.designationName.removeAt(index);
  // }

  // onSubmit() {
  //   // Handle form submission
  //   console.log(this.form.value);
  // }




  myForm: FormGroup;
getData:any;
tableData:any;
  constructor( private toastr: ToastrService,private formBuilder: FormBuilder,private service :ServicesService,private router:Router) {}

  ngOnInit() {

this.service.get_all__job_levels().subscribe((successResponse)=>{
this.getData=successResponse
})

this.service.get_all_designation().subscribe((successResponse)=>{
  this.tableData=successResponse
  console.log(this.tableData)
})


    this.myForm = this.formBuilder.group({
      joblevelId: [''], // Default value is an empty string
      designationName: ['']
    });
  }

  onSubmit() {
    // Handle form submission logic here
    console.log(this.myForm.value);

    let formData={
      designationName:[
        this.myForm.value.designationName
      ],
      joblevelId: this.myForm.value.joblevelId
    }

    
    console.log(formData)
    this.service.add_designation(formData).subscribe((successResponse)=>{
      console.log(successResponse)
      this.toastr.success('SuccessFully  Designation Added');
      window.location.reload();
    },
    (error)=>{
      // alert(error.error.message)
      window.location.reload();
      this.toastr.error('Something Went Wrong');
    })
  }


  editData(id:any){
    console.log(id,"jskljdklsj")
    // this.router.navigate([`forms/update-designation/${id}`])



  }

}
