import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

getData:any;
  myForm: FormGroup;
  tableData:any

  constructor(private formBuilder: FormBuilder,private api:ServicesService,private toastr:ToastrService) {}

  ngOnInit() {
    this.api.get_all_sub_duties().subscribe((successResponse)=>{
      this.getData=successResponse
      console.log(this.getData)
    
    })

this.api.get_all_task().subscribe((successResponse) => {
  console.log(successResponse)
  this.tableData = successResponse;
})


    this.myForm = this.formBuilder.group({
      taskName: [''], // Default value is an empty string
      subDutiesId: [1] // Default value set to 1, change as needed
    });
  }

  onSubmit() {
    // Your form submission logic here
    console.log(this.myForm.value);
    let formData={
      taskName:[this.myForm.value.taskName],
      subDutiesId:this.myForm.value.subDutiesId
      }
      console.log(formData);
      this.api.add_task(formData).subscribe((successResponse)=>{
        console.log(successResponse)
        this.toastr.info("Suceessfully Done")
        window.location.reload();
      },((errorResponse)=>{
        this.toastr.info("Something Went Wrong")
      }))
  }


  // form: FormGroup;

  // constructor(private fb: FormBuilder) { }

  // ngOnInit(): void {
  //   this.form = this.fb.group({
  //     designationId: [''],
  //     tasks: this.fb.array([this.fb.control('')]),
  //   });
  // }

  // // Getter for easy access to the tasks form array
  // get tasks() {
  //   return this.form.get('tasks') as FormArray;
  // }

  // // Function to add a new task to the form array
  // addTask() {
  //   this.tasks.push(this.fb.control(''));
  // }

  // // Function to remove a task from the form array
  // removeTask(index: number) {
  //   this.tasks.removeAt(index);
  // }

  // // Function to handle form submission
  // onSubmit() {
  //   // Your logic for handling form submission goes here
  //   console.log(this.form.value);
  // }


  editData(id:string){
    console.log(id)
  }
}
