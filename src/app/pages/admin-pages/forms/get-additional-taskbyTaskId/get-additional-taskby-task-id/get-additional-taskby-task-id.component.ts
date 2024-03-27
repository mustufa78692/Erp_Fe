import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { send } from 'process';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-get-additional-taskby-task-id',
  templateUrl: './get-additional-taskby-task-id.component.html',
  styleUrls: ['./get-additional-taskby-task-id.component.scss']
})
export class GetAdditionalTaskbyTaskIdComponent implements OnInit {
  tableData:any;
  constructor(private toastr: ToastrService,private api:ServicesService,private activateRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id=this.activateRoute.snapshot.params['id'];
    // console.log(id)
    this.api.getEmployeeByTaskId(id).subscribe((successResponse:any)=>{
// console.log(successResponse)
this.tableData=successResponse.reverse()
    },((errorResponse)=>{
      console.log(errorResponse)
    }))
  }

  editData(id:any){
// console.log(id)
let endDate = new Date();

// Getting the year, date, and month and ensuring they are in the correct format (e.g., leading zero)
let year = endDate.getFullYear();
let month = endDate.getMonth() + 1; // getMonth() returns 0-11
let date = endDate.getDate();

// Ensuring month and date are two digits
// month = month < 10 ? '0' + month : month;
// date = date < 10 ? '0' + date : date;

// Constructing the date string in "YYYY-DD-MM" format
let formattedDate = `${year}-${month}-${date}`;

console.log(formattedDate);
let sendData={
  currentId:id,
  endDate:formattedDate
}

this.api.endTheAdditionalTask(sendData).subscribe((successResponse)=>{
// console.log(successResponse)
this.toastr.success("SuccessFully End Task  !")

this.router.navigate(['forms/add-additional-task'])
},((errorResponse)=>{
  console.log(errorResponse);
  this.toastr.error("Something Went Wrong !")
}))

  }

}
