import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-update-leave-approver',
  templateUrl: './update-leave-approver.component.html',
  styleUrls: ['./update-leave-approver.component.scss']
})
export class UpdateLeaveApproverComponent implements OnInit {
  updateForm: FormGroup;
  constructor(private api:ServicesService,private toastr: ToastrService,private activeRoute:ActivatedRoute,private route:Router,private formBuilder: FormBuilder) { }
  id1:number;
  id2:number;
  id3:number;
  id4:string
  laid:number
  ngOnInit(): void {
    this.id1=this.activeRoute.snapshot.params['id1']
    console.log(this.id1)
    this.id2=this.activeRoute.snapshot.params['id2']
    console.log(this.id2)
    this.id3=this.activeRoute.snapshot.params['id3']
    console.log(this.id3)
    this.id4=this.activeRoute.snapshot.params['id4']
    this.laid=this.activeRoute.snapshot.params['laid']
console.log(this.laid)




    this.updateForm = this.formBuilder.group({
      startDate: [this.id4, Validators.required],
      endDate: [''],
      locationId: [this.id3, Validators.required],
      firstApproverEmpId: [this.id1, Validators.required],
      secondApproverEmpId: [this.id2, Validators.required]
    });
  }


  onUpdate() {
    if (this.updateForm.valid) {
      const formData = {
        firstApproverEmpId:this.updateForm.value.firstApproverEmpId,
        secondApproverEmpId:this.updateForm.value.secondApproverEmpId,
        startDate:this.updateForm.value.startDate,
        endDate:this.updateForm.value.endDate,
        locations:[{
          locationId:this.updateForm.value.locationId
        }]
      }
      // You can now send the formData to your API for updating the record
      console.log(formData);

      this.api.update_leave_approver(this.laid,formData).subscribe((successResponse)=>{
        // console.log(successResponse);
        this.toastr.info("Successfully Update  ")
        this.route.navigate(['forms/add-leave-approver'])
      },((errorResponse)=>{
        console.log(errorResponse);
      }))
      
    }
  }

}
