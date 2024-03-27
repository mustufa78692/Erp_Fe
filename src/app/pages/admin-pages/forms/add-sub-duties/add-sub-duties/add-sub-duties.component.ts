import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-add-sub-duties',
  templateUrl: './add-sub-duties.component.html',
  styleUrls: ['./add-sub-duties.component.scss']
})
export class AddSubDutiesComponent implements OnInit {
  myForm: FormGroup;
getData:any
tableData:any
  constructor( private formBuilder: FormBuilder,private api:ServicesService, private toastr:ToastrService) {}

  ngOnInit() {

//data for the table 
this.api.get_all_sub_duties().subscribe((successResponse)=>{
  this.tableData=successResponse
  console.log(this.tableData)

})



    this.api.get_all_duties().subscribe((successResponse)=>{
      this.getData=successResponse
      console.log(this.getData)
    })

    this.myForm = this.formBuilder.group({
      dutiesIdl: [1], // Default value set to 1, change as needed
      subDuties: ['']
    });
  }

  onSubmit() {
    // Your form submission logic here
    console.log(this.myForm.value);
    let formData={
      subDuties:[this.myForm.value.subDuties],
      dutiesIdl:this.myForm.value.dutiesIdl

    }
    console.log(formData);
    this.api.add_sub_duties(formData).subscribe((successResponse)=>{
      this.toastr.info("Suceessfully Done")
        window.location.reload();
      console.log(successResponse);
    }
    ,(error)=>
    {
      this.toastr.info( error.error.message,"Something Went Wrong")
      alert(error.error.message);
    })

  }
  editData(id:string){
    console.log(id)
  }

}
