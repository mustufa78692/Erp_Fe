import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-update-designation',
  templateUrl: './update-designation.component.html',
  styleUrls: ['./update-designation.component.scss']
})
export class UpdateDesignationComponent implements OnInit {

//   constructor(private api:ServicesService,private activeRoute:ActivatedRoute,private router:Router,private formBuilder: FormBuilder) { }
//   public  obj :any;
//   ngOnInit(): void {
//     let id =this.activeRoute.snapshot.params['id']
//     console.log(id)
    

//     this.api.get_all__job_levels().subscribe((successResponse)=>{
//       console.log(successResponse)
//       this.jobLevels=successResponse
//     })

//     this.api.getDesignationByDestignationId(id).subscribe((sucesssResponse:any)=>{
//       console.log(sucesssResponse)
//       this.obj=sucesssResponse
//       this.initPost()
      


//     },((errorResponse)=>{
//       console.log(errorResponse)
//     }))





//   }


//   form: FormGroup;
//   jobLevels :any
//   // = [
//   //   { id: 1, name: 'Level 1' },
//   //   { id: 2, name: 'Level 2' },
//   //   // add more job levels as needed
//   // ];



// public initPost(){
//   this.form = this.formBuilder.group({
//     designationId: [this.obj?.designationId],
//     designationName: [this.obj?.designationName],
//     jobLevelID: [this.obj?.jobLevelID]
//   });
// }
//   onSubmit() {
//     if (this.form.valid) {
//       console.log(this.form.value);
//       // Perform the submission logic here
//     }
//   }



form: FormGroup; // Declare the form at the top
  jobLevels: any; // This will hold your job levels

  constructor(
    private api: ServicesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({ // Initialize your form structure here
      designationId: [''],
      designationName: [''],
      jobLevelID: ['']
    });
  }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.params['id'];
    console.log(id);

    // Fetch job levels
    this.api.get_all__job_levels().subscribe((successResponse) => {
      console.log(successResponse);
      this.jobLevels = successResponse;
    }, error => console.error(error));

    // Fetch designation details and update the form
    this.api.getDesignationByDestignationId(id).subscribe((successResponse: any) => {
      console.log(successResponse);
      this.form.patchValue({ // Use patchValue to update the form values
        designationId: successResponse.designationId,
        designationName: successResponse.designationName,
        jobLevelID: successResponse.jobLevelID
      });
    }, error => console.error(error));
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);

      let FormData={
        designation:{
          designationId:this.form.value.designationId,
          designationName:this.form.value.designationName
        },
        jobLevelID:this.form.value.jobLevelID
      }



      this.api.updateDesignationLevel(FormData).subscribe((successsResponse)=>{
        console.log(  successsResponse)
      })
      // Perform the update logic here, for example:
      // this.api.updateDesignation(this.form.value).subscribe({
      //   next: (response) => {
      //     console.log('Update success', response);
      //     this.router.navigate(['/designation-list']); // Navigate to the list or appropriate page on success
      //   },
      //   error: (error) => console.error('Update failed', error)
      // });
    }
  }
}
