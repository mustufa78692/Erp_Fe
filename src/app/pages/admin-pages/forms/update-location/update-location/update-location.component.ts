import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.scss']
})
export class UpdateLocationComponent implements OnInit {
  // myForm: FormGroup;
  // constructor(private activateRoute:ActivatedRoute,private api:ServicesService,private router:Router,private fb:FormBuilder) { }

  // ngOnInit(): void {
  //   let id=this.activateRoute.snapshot.params['id']
  //   console.log(id)
  //   this.api.getLocationByLocationById(id).subscribe((successResponse)=>{
  //     console.log(successResponse)
  //   },((errorResponse)=>{
  //     console.log(errorResponse)
  //   }))


  //   this.myForm = this.fb.group({
  //     concernedAuthorityEmpId: ['', Validators.required],
  //     name: ['', Validators.required],
  //     address: ['', Validators.required],
  //     latitude: ['', Validators.required],
  //     longitude: ['', Validators.required],
  //     inchargeInfo: ['', Validators.required],
  //     country: ['', Validators.required],
  //     isMaintenanceRequired:[null],
  //     commentsForMaintenance:[null],
  //   });
  // }


  myForm: FormGroup;
public  emp:any
  constructor(
    private activateRoute: ActivatedRoute,
    private api: ServicesService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }
  get_employee_Id:any
  ngOnInit(): void {


    this.api.getAllActiveEmployee().subscribe((successResponse)=>{
      console.log(successResponse)
      this.get_employee_Id=successResponse
    })
    let id = this.activateRoute.snapshot.params['id'];
    this.emp=id
    console.log(id);

    // Fetch the location data and patch the form
    this.api.getLocationByLocationById(id).subscribe(
      (successResponse) => {
        console.log(successResponse);
        this.patchForm(successResponse); // Call a method to patch the form
      },
      (errorResponse) => { // Corrected syntax for error handling
        console.log(errorResponse);
      }
    );

    // Initialize the form with validators
    this.myForm = this.fb.group({
      concernedAuthorityEmpId: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      inchargeInfo: ['', Validators.required],
      country: ['', Validators.required],
      isMaintenanceRequired: [false], // Assuming a default value; adjust as needed
      commentsForMaintenance: ['', Validators.required], // Ensure you have validators if needed
    });
  }

  // Method to patch the form with fetched data
  patchForm(data: any): void {
    this.myForm.patchValue({
      concernedAuthorityEmpId: data.concernedAuthorityEmpId,
      name: data.name,
      address: data.address,
      latitude: data.latitude,
      longitude: data.longitude,
      inchargeInfo: data.inchargeInfo,
      country: data.country,
      isMaintenanceRequired: data.isMaintenanceRequired,
      commentsForMaintenance: data.commentsForMaintenance,
    });
  }


  onSubmit() {
    console.log(this.myForm.value);
    let formData={
      concernedAuthorityEmpId:this.myForm.value.concernedAuthorityEmpId,
      name:this.myForm.value.name,
      address:this.myForm.value.address,
      latitude:this.myForm.value.latitude,
      longitude:this.myForm.value.longitude,
      country:this.myForm.value.country,
      inchargeInfo:this.myForm.value.inchargeInfo,
      isMaintenanceRequired:this.myForm.value.isMaintenanceRequired,
      commentsForMaintenance:this.myForm.value.commentsForMaintenance
}
console.log(formData);

this.api.updateLocation(this.emp,formData).subscribe((successResponse)=>{
  console.log(successResponse);

  this.toastr.info("SuccessFully Update the Location")
  this.router.navigate(['forms/add-location'])
},((errorResponse)=>{
  console.log(errorResponse);
  this.toastr.info("Something Went Wrong!");
}))
    // this.service.add_location(formData).subscribe((successResponse) => {
    //   console.log(successResponse)
    // })

  
  }



}
