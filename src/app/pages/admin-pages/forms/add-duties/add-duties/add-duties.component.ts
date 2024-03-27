import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-add-duties',
  templateUrl: './add-duties.component.html',
  styleUrls: ['./add-duties.component.scss']
})
export class AddDutiesComponent implements OnInit {
  myForm: FormGroup;
  tableData:any;
getDesignationId:any
  constructor(private toastr: ToastrService,private formBuilder: FormBuilder,private api :ServicesService) {}

  ngOnInit() {


    this.api.get_all_designation().subscribe((successResponse)=>{
      this.getDesignationId=successResponse

    })


  this.api.get_all_duties().subscribe((successResponse)=>{
    console.log(successResponse)
    this.tableData=successResponse;
  })
    this.myForm = this.formBuilder.group({
      designationId: [''], // Default value is an empty string
      duties: ['']
    });
  }

  onSubmit() {
    // Handle form submission logic here


    let formData={
      duties:[this.myForm.value.duties],
      designationid:this.myForm.value.designationId
    }
    this.api.add_duties(formData).subscribe((successResponse)=>{
      console.log(successResponse)
      window.location.reload();
      this.toastr.success('SuccessFully  Duty Added');

    },((errorResponse)=>{
      this.toastr.error('Something Went Wrong');
    }))
    console.log(formData);
  }


  // form: FormGroup;

  // constructor(private fb: FormBuilder) { }

  // ngOnInit(): void {
  //   this.form = this.fb.group({
  //     designationId: [''],
  //     duties: this.fb.array([this.fb.control('')]),
  //   });
  // }

  // // Getter for easy access to the duties form array
  // get duties() {
  //   return this.form.get('duties') as FormArray;
  // }

  // // Function to add a new duty to the form array
  // addDuty() {
  //   this.duties.push(this.fb.control(''));
  // }

  // // Function to remove a duty from the form array
  // removeDuty(index: number) {
  //   this.duties.removeAt(index);
  // }

  // // Function to handle form submission
  // onSubmit() {
  //   // Your logic for handling form submission goes here
  //   console.log(this.form.value);
  // }

  // form: FormGroup;

  // constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.initForm();
  // }

  // initForm() {
  //   this.form = this.fb.group({
  //     designationId: [1, Validators.required], // Updated field name
  //     duties: this.fb.array([this.fb.control('')]), // Updated field name
  //   });
  // }

  // get duties() {
  //   return this.form.get('duties') as FormArray; // Updated field name
  // }

  // addDuty() {
  //   this.duties.push(this.fb.control('', Validators.required)); // Updated function name
  // }

  // removeDuty(index: number) {
  //   this.duties.removeAt(index); // Updated function name
  // }

  // onSubmit() {
  //   // Handle form submission
  // console.log("jkljkj")
  //   console.log(this.form.value);
  // }



  editData(id:any){
    console.log(id)
  }
}
