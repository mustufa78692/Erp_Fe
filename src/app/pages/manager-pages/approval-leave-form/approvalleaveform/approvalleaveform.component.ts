import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-approvalleaveform',
  templateUrl: './approvalleaveform.component.html',
  styleUrls: ['./approvalleaveform.component.scss']
})
export class ApprovalleaveformComponent implements OnInit {
  public ownData:any
  public LeaveForm: FormGroup;
  selectedDate:any;
  startDate: any;
  endDate: any;
  difference: any;
  status:any;
  managerName:any;
  data:any;
  emp_obj:any
  // data:any
  public id :any
  constructor( private sanitizer: DomSanitizer,private formBuilder:FormBuilder, private services:ServicesService, private route:ActivatedRoute,private Router:Router) { 
    const token = this.services.getToken();
    console.log(token);

    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userId = decodedToken.sub;
      // console.log(userId);

      this.services.personalInfo(userId).subscribe((success) => {

        console.log(success);
        this.emp_obj = success;

    //     // Initialize the form after getting data
        // this.initLeaveForm();
        // console.log("adfnjdnf")
      });
    } else {
      console.error('Token not found.');
    }

  }

  ngOnInit(): void {
    this.initLeaveForm();
    this.fetchIdThroughToken()
    // console.log(this.data.firstName)

    this.id = this.route.snapshot.params["id"];
    console.log(this.id);
    this.services.getLeaveFormDetailsByleaveForm_id(this.id).subscribe((res) => {
      this.obj = res;
      console.log(this.obj);
      console.log(this.obj?.department,this.obj?.jobLevel);

      this.initLeaveForm()
      
    });


    // console.log(this.ownData)
  }
  calculateDifference() {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);

      // Calculate the difference in days
      const differenceInTime = end.getTime() - start.getTime();
      this.difference = differenceInTime / (1000 * 3600 * 24);
      console.log(this.difference);
    }
  }

  public fetchIdThroughToken(){
    const token = this.services.getToken();
    console.log(token)
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userId = decodedToken.sub; 
      console.log(userId) // Assuming 'id' is the property in the decoded token
      this.services.personalInfo(userId).subscribe((success:any)=>{
        console.log(success.email)

        this.ownData=success
        console.log(this.ownData.email)
        // this.data=success;
        // // console.log(this.data.firstName)
        // this.data=success
       
        
        // this.object=success
      })
      // if (userId) {
      //   this.services.personalInfo(userId).subscribe((result : any) => {
      //     console.log(result);
      //   });
      // } else {
      //   console.error('User ID not found in the token.');
      // }
    } else {
      console.error('Token not found.');
    }
  }



  public getImage(blobs: string) {
    let objectURL = "data:image/jpeg;base64," + blobs;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  public getPDF(blob: string): SafeUrl {
    const blobUrl = `data:application/pdf;base64,${blob}`;
    return this.sanitizer.bypassSecurityTrustUrl(blobUrl);
  }

  
public obj:any




  public initLeaveForm() {
    
    this.LeaveForm = this.formBuilder.group({
      employeeId: [this.obj?.employeeId],
      nameOfEmployee: [
        
         
          this.obj?.nameOfEmployee,
      ],
      designation: [this.obj?.designation],
      department: [this.obj?.department],
      jobLevel:[this.obj?.jobLevel],
      location:[this.obj?.location],
      numberOfDaysRequested: [this.obj?.numberOfDaysRequested],
      leaveReason: [this.obj?.leaveReason],
      requestDate: [this.obj?.requestDate],
      startDate: [this.obj?.startDate],
      endDate: [this.obj?.endDate],
      //
      approvingManagerName: [this.ownData?.firstName + this.ownData?.middleName + this.ownData?.lastName],
      approvalStatus: [this.status],
      approvalRemarks: [''],
      managerEmail:[this.ownData?.email],
      //
      hrName:[null],
      hrApprovalStatus:[null] ,
      hrApprovalRemarks:[null],
      hrEmail: [null],
      email: [this.obj?.email],
      contactNumber: [
        this.obj?.contactNumber,
      ],
      emergencyContactNumber: [this.obj?.emergencyContactNumber],
      medicalDocumentsName:[this.obj?.medicalDocumentData],
     //yaha se krna hai 
      noOfLeavesApproved:[this.obj?.noOfLeavesApproved],
      approvedStartDate:[this.obj?.startDate] ,
      approvedEndDate:[this.obj?.endDate],
      // yaha tak
      leaveType: [this.obj?.leaveType.leaveName],
      leaveTypeId:[this.obj?.leaveType.leaveTypeId],
      leaveDays:[this.obj?.leaveType.leaveDays],

    });
  }


  postLeaveForm() {
    console.log(this.LeaveForm.value);
    // let leaveApproval={this.LeaveForm.value}
    // this.services.leaveformPost(leaveApproval).subscribe((data)=>{
    //   console.log("suceesfull post Leave Form")
    // })
if(this.LeaveForm.valid){
  let leaveApproval ={
    employeeId:this.LeaveForm.value.employeeId,
    nameOfEmployee:this.LeaveForm.value.nameOfEmployee,
    designation:this.LeaveForm.value.designation,
    department:this.LeaveForm.value.department,
    jobLevel:this.LeaveForm.value.jobLevel,
    location:this.LeaveForm.value.location,
    numberOfDaysRequested:this.LeaveForm.value.numberOfDaysRequested,
    leaveReason:this.LeaveForm.value.leaveReason,
    requestDate:this.LeaveForm.value.requestDate,
    startDate:this.LeaveForm.value.startDate,
    endDate:this.LeaveForm.value.endDate,
    approvingManagerName:this.ownData?.firstName + ' '+ this.ownData?.middleName + ' '+ this.ownData?.lastName,
    approvalStatus:this.LeaveForm.value.approvalStatus,
    approvalRemarks:this.LeaveForm.value.approvalRemarks,
    managerEmail:this.ownData?.email,
    // managerEmail:this.LeaveForm.value.managerEmail,
    hrApprovalStatus:this.LeaveForm.value.hrApprovalStatus,
    hrApprovalRemarks:this.LeaveForm.value.hrApprovalRemarks,
    hrEmail:this.LeaveForm.value.hrEmail,
    hrName:this.LeaveForm.value.hrName,
    email:this.LeaveForm.value.email,
    contactNumber:this.LeaveForm.value.contactNumber,
    emergencyContactNumber:this.LeaveForm.value.emergencyContactNumber,
    noOfLeavesApproved:this.LeaveForm.value.noOfLeavesApproved,
    approvedStartDate:this.LeaveForm.value.approvedStartDate ,
    approvedEndDate:this.LeaveForm.value.approvedEndDate,
    // department:this.LeaveForm.value.department,
    leaveType:{
      // leaveType:this.LeaveForm.value.leaveType,
      leaveTypeId:this.LeaveForm.value.leaveTypeId,
      leaveName:this.LeaveForm.value.leaveType, 
      leaveDays:this.LeaveForm.value.leaveDays

    },
 
   
 




  }
  console.log(leaveApproval)
  const formFileData = new FormData();
      formFileData.append('leaveApproval', JSON.stringify(leaveApproval))
      formFileData.append("medicalDocumentsName", this.LeaveForm.value.medicalDocumentsName)
  this.services.updateLeaveForm(this.id,formFileData).subscribe((successResponse)=>{
    this.Router.navigate(['notifications'])
    console.log("succes apllied Leave Forms",successResponse);

  },((errorrResponse)=>{
    console.log(errorrResponse);
  }))

}

    // Here, you can handle form submission and send the data to your server.
  }


}
