
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ServicesService } from 'src/app/services/services.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss']
})
export class LeaveFormComponent implements OnInit {
  selectedLeaveType: any;
  public LeaveForm: FormGroup;
  selectedDate:any;
  startDate: any;
  endDate: any;
  difference: any;
  public obj:any
  designationName: string;
  levelName: string;
  minDate:string

  locationId:any;
  location_Name: string;

  public LeaveTyped: any[] = [];

  constructor(private services: ServicesService, private formBuilder: FormBuilder,private router: Router) {
  
  }

  ngOnInit(): void {

    this.minDate = new Date().toISOString().split('T')[0];
    console.log(this.minDate);
    
    let localData=localStorage.getItem("currentDesignationAndTask")
    let localDataObject = JSON.parse(localData);
    console.log(localDataObject[0]?.designation);
    console.log(localDataObject[0]?.location[0]?.name,localDataObject[0]?.location[0]?.locationId);
//  "njuhn",localDataObject[0]?.designation[0].jobLevelID
this.locationId=localDataObject[0]?.location[0]?.locationId
this.location_Name=localDataObject[0]?.location[0]?.name
this.designationName=localDataObject[0]?.designation[0]?.designationName
this.levelName=localDataObject[0]?.designation[0]?.jobLevel,


    this.initLeaveForm();
    this.services.getAllLeaveType().subscribe((succ:any)=>{
      console.log(succ)
      this.LeaveTyped=succ
      console.log(this.LeaveTyped)
    })
    const token = this.services.getToken();
    console.log(token);

    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userId = decodedToken.sub;
      console.log(userId);

      this.services.personalInfo(userId).subscribe((success) => {

        console.log(success);
        this.obj = success;

    //     // Initialize the form after getting data
        this.initLeaveForm();
        // console.log("adfnjdnf")
      });
    } else {
      console.error('Token not found.');
    }
  }


  // Create a method to calculate the difference
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


  getValue(event:any){
    console.log(event.target.name)

  }

  onDateChange(): void {
    console.log(this.LeaveForm.get('leaveType').value)
    if (this.LeaveForm.get('startDate').valid && this.LeaveForm.get('endDate').valid && this.LeaveForm.get('leaveType').valid) {
      const startDateValue = this.LeaveForm.value.startDate;
      const endDateValue = this.LeaveForm.value.endDate;
      const leaveType = this.LeaveForm.value.leaveType;
  
      // If the dates are the same
      if (startDateValue === endDateValue) {
        // Check if it's a half-day leave
        if (leaveType === '1') {
          this.LeaveForm.patchValue({ numberOfDaysRequested: 0.5 });
        } else {
          // For full-day leave on the same day
          this.LeaveForm.patchValue({ numberOfDaysRequested: 1 });
        }
      } else {
        // If the start and end dates are different
        const startDate = new Date(startDateValue);
        const endDate = new Date(endDateValue);
        const daysExcludingSundays = this.calculateDaysExcludingSundays(startDate, endDate);
  
        this.LeaveForm.patchValue({ numberOfDaysRequested: daysExcludingSundays });
      }
    }
  }

  calculateDaysExcludingSundays(startDate: any, endDate: any): number {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let count = 0;

    while (start <= end) {
      if (start.getDay() !== 0) { // 0 is Sunday
        count++;
      }
      start.setDate(start.getDate() + 1);
    }

    return count;
  }

  //method for getting post form controls
  get getLeaveFormControls() {
    return this.LeaveForm?.controls;
  }

// method for upload file
  public uploadFile(event: any) {
    console.log(event.target.name);

    let file = (event.target as HTMLInputElement).files![0];
    switch (event.target.name) {
      case 'medicalDocumentsName':
        this.LeaveForm?.patchValue({
          medicalDocumentsName: file
        })
        break;
      }
  }

  onSelect(event:any){
    switch (event.target.name){
      case "leaveType":
        if (this.LeaveForm.controls['leaveType'].value === '2') {
          this.LeaveForm.get('medicalDocumentsName')?.enable();
        }
        else {
          this.LeaveForm.get('medicalDocumentsName')?.disable();
          this.LeaveForm.patchValue({
            medicalDocumentsName:''
          })
        }
        break;
    }

  }
  public initLeaveForm() {
    this.LeaveForm = this.formBuilder.group({
      employeeId: [this.obj?.employeeId],
      nameOfEmployee: [this.obj?.namePrefix + " " +this.obj?.firstName + " " +this.obj?.middleName+ " " +this.obj?.lastName],
      email: [this.obj?.email],
      contactNumber: [`${this.obj?.phoneCode} ${this.obj?.personalContactNo}`],
      designation: [this.designationName],
      department: [this.obj?.department?.departmentName],
      emergencyContactNumber: [''],
      requestDate: [new Date().toISOString().substring(0, 10)],
      leaveType: [''],
      medicalDocumentsName: [''],
      leaveReason: [''],
      startDate: [''],
      endDate: [''],
      numberOfDaysRequested: [''],
      approvalStatus: ['Pending'],
      approvingManagerName: [null],
      approvalRemarks: [null],
      jobLevel: [this.levelName],
      // jobLevel: [this.obj?.jobDetails[0]?.jobLevel],
      location: [this.location_Name],
      managerEmail: [null],
      hrName: [null],
      hrApprovalStatus:["pending"] ,
    hrApprovalRemarks:[null],
      hrEmail: [null]
    });
  }


  hidethemedicalDocsValidationMsg(){
    this.medicalDocumentsNameValidationMessage=''
  }
  hidetheleaveStartDateValidationMsg(){
    this.LeaveStartDateValidationMessage=''
  }
  hidetheleaveEndDateValidationMsg(){
    this.LeaveEndDateValidationMessage=''
  }
  hidetheleaveTypeValidationMsg(){
    this.leaveTypeValidationMessage=''
  }
  LeaveStartDateValidationMessage=''
  LeaveEndDateValidationMessage=''
  leaveTypeValidationMessage=''
  medicalDocumentsNameValidationMessage=''
  
  postLeaveForm() {
    let Isvalid= true


    if (this.LeaveForm.get('startDate').value != '' && this.LeaveForm.get('startDate').value != null){
      this.LeaveStartDateValidationMessage=''
    }else{
      this.LeaveStartDateValidationMessage = 'Fill the required field';
      Isvalid = false; 
    }
    if (this.LeaveForm.get('endDate').value != '' && this.LeaveForm.get('endDate').value != null){
      this.LeaveEndDateValidationMessage=''
    }else{
      this.LeaveEndDateValidationMessage = 'Fill the required field';
      Isvalid = false; 
    }
    // console.log(this.LeaveForm.value);
    if (this.LeaveForm.get('leaveType').value != '' && this.LeaveForm.get('leaveType').value != null){
      this.leaveTypeValidationMessage=''
    }else{
      this.leaveTypeValidationMessage = 'Fill the required field';
      Isvalid = false; 
    }
    if (this.LeaveForm.get('leaveType').value == '2' ){
      if (this.LeaveForm.get('medicalDocumentsName').value != '' && this.LeaveForm.get('medicalDocumentsName').value != null){
        this.medicalDocumentsNameValidationMessage=''
      }else{
        this.medicalDocumentsNameValidationMessage = 'Fill the required field';
        Isvalid = false; 
      }

      // this.leaveTypeValidationMessage=''
    }else{
      this.medicalDocumentsNameValidationMessage = '';
      // Isvalid = false; 
    }
    // console.log(this.LeaveForm.value);
  
if(Isvalid){
  
  let leaveApproval ={
    leaveType:{
      leaveTypeId:this.LeaveForm.value.leaveType,
  
    },
    employeeId:this.LeaveForm.value.employeeId,
    nameOfEmployee:this.LeaveForm.value.nameOfEmployee,
    email:this.LeaveForm.value.email,
    contactNumber:this.LeaveForm.value.contactNumber,
    emergencyContactNumber:this.LeaveForm.value.emergencyContactNumber,
    designation:this.LeaveForm.value.designation,
    department:this.LeaveForm.value.department,
    requestDate:this.LeaveForm.value.requestDate,
    
    leaveReason:this.LeaveForm.value.leaveReason,
    startDate:this.LeaveForm.value.startDate,
    endDate:this.LeaveForm.value.endDate,
    numberOfDaysRequested:+this.LeaveForm.value.numberOfDaysRequested,
    approvalStatus:this.LeaveForm.value.approvalStatus,
    approvingManagerName:this.LeaveForm.value.approvingManagerName,
    approvalRemarks:this.LeaveForm.value.approvalRemarks,
    // medicalDocumentsName:this.LeaveForm.value.medicalDocumentsName,
    jobLevel:this.LeaveForm.value.jobLevel,
    location:this.locationId,
    managerEmail:this.LeaveForm.value.managerEmail,

    hrName:this.LeaveForm.value.hrName,
    hrApprovalStatus:this.LeaveForm.value.hrApprovalStatus,
    hrApprovalRemarks:this.LeaveForm.value.hrApprovalRemarks,
    hrEmail:this.LeaveForm.value.hrEmail



    
  }
  console.log(leaveApproval)
  const formFileData = new FormData();
      formFileData.append('leaveApproval', JSON.stringify(leaveApproval));
      formFileData.append('medicalDocumentsName', this.LeaveForm.value.medicalDocumentsName);
  this.services.leaveformPost(formFileData).subscribe((data)=>{
    console.log("succes apllied Leave Forms",data)
    this.router.navigate(['/user-profile']);
  })

}

    // Here, you can handle form submission and send the data to your server.
  }
  navigate(id:any){

    this.router.navigate([`leave-update/${id}`]);
  }



}
