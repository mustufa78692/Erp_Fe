import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-level-type-form',
  templateUrl: './level-type-form.component.html',
  styleUrls: ['./level-type-form.component.scss']
})
export class LevelTypeFormComponent implements OnInit {

  levelForm: FormGroup;
  getData:any

  constructor(private fb: FormBuilder,private api:ServicesService,
    private toastr: ToastrService) {
    this.levelForm = this.fb.group({
      levelName: ['', Validators.required ]
    });
  }

  ngOnInit(): void {

    this.api.get_all__job_levels().subscribe((successResponse)=>{
      console.log(successResponse)
      this.getData=successResponse;
    })  }

  onSubmit() {
    if (this.levelForm.valid) {
      // Do something with the form data, e.g., send it to a server
      console.log(this.levelForm.value);
      let formData=this.levelForm.value
      let sendData=formData.levelName
      sendData = sendData.toUpperCase();

      // const formFileData = new FormData();
      // formFileData.append('levelName', JSON.stringify(this.levelForm.value))
      this.api.addJobLevel(sendData).subscribe((successResponse)=>{
        console.log(successResponse)
        this.toastr.info("Successfully Done")
        window.location.reload();

      },((errorrResponse)=>{
        // console.log(errorrResponse.error.text)
        this.toastr.error(errorrResponse.error.text)
        window.location.reload();
      }))


    }
  }


  editData(id:string){
    console.log(id)
  }  

}
