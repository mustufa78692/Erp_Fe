import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Country, State, City } from 'country-state-city';
import { distinctUntilChanged } from 'rxjs';
import { DatePipe } from '@angular/common';
// import { ApiService } from '../services/api.service';
// import { DatePipe, formatDate } from '@angular/common';

import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// export class newEmployee {
//   public obj: any = {
//   };
//   public constructor(init?: any) {
//     init.forEach((e: any, index: any) => {
//       this.obj[index] = e
//     })
//     console.log(this.obj);
//   }
// }

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss'],
  providers: [DatePipe]
})
export class NewEmployeeComponent implements OnInit {
  // public minDate:any;
  maxDate: string;
  minDate: string;
  locations: any
  public designationByLevelId: any
  public currentDate!: string;
  public levelId: any;
  public step: any = 1;
  public postForm!: FormGroup;
  public Countries: any[] = []
  public get_all_level: any;
  years: number[] = [];
  constructor(private toastr: ToastrService, private router: Router, private apiService: ServicesService, private formBuilder: FormBuilder, private datePipe: DatePipe) {

    // const newDate= new Date;
    // this.minDate=this.datePipe.transform(newDate,'yyyy-MM-dd')

  }
  public fileUploaderConfig = {
    multiple: false,
    animation: false,
  };

  //method for uploading the files
  public uploadFile(event: any) {
    console.log(event.target.name);

    let file = (event.target as HTMLInputElement).files![0];
    switch (event.target.name) {
      case 'passportSizePhoto':

        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        break;
      // this.postForm?.patchValue({
      //   passportSizePhoto: file
      // })
      // break;
      case 'scannedCopyOfLincense':
        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        // this.postForm?.patchValue({
        //   scannedCopyOfLincense: file
        // })
        break;
      case 'passportScannedCopy':
        if (file.type !== 'application/pdf') {
          // alert('Only PDF files are allowed!');
          this.toastr.error('Only PDF files are allowed!')

          return;
        }
        // Check if the file size is greater than 2MB
        if (file.size > 2097152) { // 2MB in bytes
          // alert('File size must be less than 2 MB!');
          this.toastr.error('File size must be less than 2 MB!')
          return;
        }
        this.postForm?.patchValue({
          passportScannedCopy: file
        })
        break;
      case 'otherScannedIdProof':
        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        // this.postForm?.patchValue({
        //   otherScannedIdProof: file
        // })
        break;
      case 'ScannedCopyOfRealtiveAddress':
        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        // this.postForm?.patchValue({
        //   ScannedCopyOfRealtiveAddress: file
        // })
        break;
      case 'ScannedCopyOfRealtiveId':
        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        // this.postForm?.patchValue({
        //   ScannedCopyOfRealtiveId: file
        // })
        break;
      case 'ScannedCopyOfCourseCompleted':
        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        // this.postForm?.patchValue({
        //   ScannedCopyOfCourseCompleted: file
        // })
        break;
      case 'ScannedCopyOfDiploma':
        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        // this.postForm?.patchValue({
        //   ScannedCopyOfDiploma: file
        // })
        break;
      case 'ScannedCopyOfPostGraduation':
        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        // this.postForm?.patchValue({
        //   ScannedCopyOfPostGraduation: file
        // })
        break;
      case 'ScannedCopyOfGraduation':
        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        // this.postForm?.patchValue({
        //   ScannedCopyOfGraduation: file
        // })
        break;
      case 'ScannedCopyOfSeniorSecondary':
        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        // this.postForm?.patchValue({
        //   ScannedCopyOfSeniorSecondary: file
        // })
        break;
      case 'ScannedCopyOfSecondary':
        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        // this.postForm?.patchValue({
        //   ScannedCopyOfSecondary: file

        // })
        break;
      case 'SalaryScannedCopy':
        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        // this.postForm?.patchValue({
        //   SalaryScannedCopy: file
        // })
        break;
      case 'RecordSheet':
        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        // this.postForm?.patchValue({
        //   RecordSheet: file
        // })
        break;
      case 'CertificateUploadedForOutsource':
        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        // this.postForm?.patchValue({
        //   CertificateUploadedForOutsource: file
        // })
        break;
      case 'PaidTrainingDocumentProof':
        console.log(this.postForm.patchValue)
        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        // this.postForm?.patchValue({
        //   PaidTrainingDocumentProof: file
        // })
        break;

      case 'VisaScannedCopyOfID':
        console.log("inside visa Scanned")
        if (file.type !== 'application/pdf') {
          // alert('Only PDF files are allowed!');
          this.toastr.error('Only PDF files are allowed!')
          event.target.value = '';

          return;
        }
        // Check if the file size is greater than 2MB
        if (file.size > 2097152) { // 2MB in bytes
          this.toastr.error('Only PDF files are allowed!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          VisaScannedCopyOfID: file
        })
        // this.postForm?.patchValue({
        //   VisaScannedCopyOfID: file
        // })
        break;
      case 'ScanCopyOfAchivements':
        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        // this.postForm?.patchValue({
        //   ScanCopyOfAchivements: file
        // })
        break;
      case 'Declaration':
        if (file.size > 102400) { // 100KB in bytes
          // alert('File size must be less than 100 KB!');
          this.toastr.error('File size must be less than 100 KB!')
          event.target.value = '';
          return;
        }
        this.postForm?.patchValue({
          [event.target.name]: file
        });
        // this.postForm?.patchValue({
        //   Declaration: file
        // })
        break;


    }
  }

  // method for reading the file using file reader
  public fileToBase64(file: any, callback: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      const base64String = reader.result;
      callback(base64String);
    };
  }
  public department: any



  public array: any = [];
  public professionalArray: any = [];
  public achivementArray: any = [];
  //method for selecting and convert it into base64 url
  onFileSelected(event: any, index: any) {
    switch (event.target.name) {
      case 'ScannedCopyOfOther':
        // var fileObject;;
        console.log(event.target.files);
        const file = event.target.files[0];
        this.array[index] = file;
        console.log(this.array);

        break;
      case 'ScannedCopyOfCourseCompleted':
        console.log(event.target.files);
        const proffile = event.target.files[0];
        this.professionalArray[index] = proffile;
        console.log(this.professionalArray);

        break

      case 'ScanCopyOfAchivements':
        console.log(event.target.files);
        const achivefile = event.target.files[0];
        this.achivementArray[index] = achivefile;
        console.log(this.achivementArray);
        break


    }


  }

  ngOnInit() {

    const currentDate = new Date();
    const maxYear = currentDate.getFullYear() - 5;
    currentDate.setFullYear(maxYear);
    this.maxDate = currentDate.toISOString().split('T')[0];
    console.log(this.maxDate)

    this.minDate = new Date().toISOString().split('T')[0];
    console.log(this.minDate);

    const currentYear = new Date().getFullYear();
    for (let i = 1970; i <= currentYear; i++) {
      this.years.push(i);
    }

    this.apiService.getAllLocation().subscribe((successResponse) => {
      this.locations = successResponse;
      console.log(this.locations);

    }, ((errorResponse) => {
      console.log(errorResponse);
    }))



    this.apiService.get_all__job_levels().subscribe((successResponse) => {
      console.log(successResponse);
      this.get_all_level = successResponse;
    })

    this.apiService.getDepart().subscribe((succ) => {
      this.department = succ
      console.log(this.department)
    })

    this.Countries = Country.getAllCountries()
    console.log(this.Countries)

    this.initPostForm()
  }
  public employeeAge: number;
  public getAge(event: any) {
    let enterDob: string = event.target.value;
    let dob_date = enterDob.split('-')
    let current_date = new Date()
    let current_year = current_date.getFullYear()
    let current_month = current_date.getMonth() + 1
    let current_day = current_date.getDate()

    let age = current_year - parseInt(dob_date[0]) - 1
    if (parseInt(dob_date[1]) <= current_month && parseInt(dob_date[2]) <= current_day) {
      age += 1
    }
    this.employeeAge = age;
  }
  // <input type="date" name="dateOfBirth" (input)="getAge($event)">

  // To automatically calculate the age based on the date of birth, bind the getAge function to the input event of the date of birth field in your template. For example:
  public onSelect(event: any) {
    console.log(event.target.name)
    console.log(this.postForm.controls["vehicleFuelCashFacility"].value);
    
    switch (event.target.name) {

      case "status":
      if (this.postForm.controls["status"].value == "Done") {
          this.managerApprovalforbgValidationMessage = ''
          this.managerApprovalNameforbgValidationMessage = ''
          // this.vehicleNumberAmountValidationMessage = ''
          this.postForm.patchValue({
            managerApproval: '',
            managerName: '',
            remark: '',
          })
          console.log("inside the Status")
        }
        else if (this.postForm.controls["status"].value == "Pending"){
          this.doneByValidationMessage='';
          this.internalConcernedManagerValidationMessage=''
          this.externalConcernedManagerValidationMessage=''
          this.externalPostValidationMessage=''
          this.externalCompanyNameValidationMessage=''
          this.externalPhoneCodeValidationMessage=''
          this.externalPhoneNoValidationMessage=''
          this.postForm.patchValue({
            doneBy: '',
            internalConcernedManager: '',
            externalConcernedPerson: '',
            externalPost:'',
            externalCompanyName:'',
            externalPhoneCode:'',
            externalPhoneNo:''

          })
        }

        break;
      case "doneBy":
      if (this.postForm.controls["doneBy"].value == "External") {
          this.internalConcernedManagerValidationMessage = ''
        
          this.postForm.patchValue({
            internalConcernedManager: '',
           
          })
          // console.log("inside the houseRent")
        }else if (this.postForm.controls["doneBy"].value == "Internal"){
          this.externalConcernedManagerValidationMessage = ''
          this.externalPostValidationMessage = ''
          this.externalCompanyNameValidationMessage = ''
          this.externalPhoneCodeValidationMessage = ''
          this.externalPhoneNoValidationMessage = ''
          this.postForm.patchValue({
            externalConcernedPerson: '',
            externalPost: '',
            externalCompanyName: '',
            externalPhoneCode: '',
            externalPhoneNo: ''
           
          })

        }

        break;
      case "vehicleFuelCashFacility":
        if (this.postForm.controls["vehicleFuelCashFacility"].value =="Cash") {
        console.log("inside the cash")
          this.vehicleFuelChipFacilityValidationMessage = ''
          this.postForm.get('vehicleFuelChipFacility')?.disable();
          this.postForm.patchValue({
            vehicleFuelChipFacility: '',
          
          })
       
        }else{
          this.postForm.get('vehicleFuelChipFacility')?.enable();

        }
        if (this.postForm.controls["vehicleFuelCashFacility"].value =="Chip"){
          console.log("inside the chip")
          this.cashAmountAmountValidationMessage=''
          this.postForm.get('cashAmount')?.disable();
          this.postForm.patchValue({ 
            cashAmount:''
          })

        }else{

        }

        break;
      case "electricityAllocationYesOrNo":
      if (this.postForm.controls["electricityAllocationYesOrNo"].value == "No") {
          this.electricityAllocationAmountValidationMessage = ''
          this.postForm.get('electricityAllocationAmount')?.disable();
          this.postForm.patchValue({
            electricityAllocationAmount: '',
           
          })
      
        }else{
          this.postForm.get('electricityAllocationAmount')?.enable();

        }

        break;
      case "rentAllocationYesOrNo":
      if (this.postForm.controls["rentAllocationYesOrNo"].value == "No") {
          this.rentAllocationAmountValidationMessage = ''
          this.postForm.get('rentAllocationAmount')?.disable();
          this.postForm.patchValue({
            rentAllocationAmount: '',
           
          })
      
        }else{
          this.postForm.get('rentAllocationAmount')?.enable();

        }

        break;
      case "flightFacilities":
      if (this.postForm.controls["flightFacilities"].value == "No") {
          this.howMuchTimetValidationMessage = ''
          this.postForm.get('howMuchTime')?.disable();
          this.postForm.patchValue({
            howMuchTime: '',
           
          })
      
        }else{
          this.postForm.get('howMuchTime')?.enable();

        }

        break;
      case "healthInsuranceCoverage":
      if (this.postForm.controls["healthInsuranceCoverage"].value == "No") {
          this.maximumAmountGivenValidationMessage = ''
          this.postForm.get('maximumAmountGiven')?.disable();
          this.postForm.patchValue({
            maximumAmountGiven: '',
           
          })
      
        }else{
          this.postForm.get('maximumAmountGiven')?.enable();

        }

        break;
      case "familyHealthInsuranceGivenOrNot":
      if (this.postForm.controls["familyHealthInsuranceGivenOrNot"].value == "No") {
          this.familyHealthInsuranceTypeValidationMessage = ''
          this.postForm.get('familyHealthInsuranceType')?.disable();
          this.postForm.patchValue({
            familyHealthInsuranceType: '',
           
          })
      
        }else{
          this.postForm.get('familyHealthInsuranceType')?.enable();

        }

        break;
      case "vehicle":
      if (this.postForm.controls["vehicle"].value == "No") {
          this.vehicleModelYearValidationMessage = ''
          this.vehicleModelNameValidationMessage = ''
          this.vehicleNumberAmountValidationMessage = ''
          this.postForm.patchValue({
            vehicleNumber: '',
            vehicleModelName: '',
            vehicleModelYear: '',
          })
          console.log("inside the houseRent")
        }

        break;
      case "houseRentAllowance":
      if (this.postForm.controls["houseRentAllowance"].value == false) {
          this.HouseRentAmountValidationMessage = ''
          this.postForm.patchValue({
            houseRentAmount: ''
          })
          // console.log("inside the houseRent")
        }

        break;
      case "foodAllowance":
        if (this.postForm.controls["foodAllowance"].value == false) {
          this.FoodAllowanceAmountValidationMessage = ''
          this.postForm.patchValue({
            foodAllowanceAmount: ''
          })
          // this.postForm.controls['foodAllowanceAmount'].value === ''
          // console.log("inside the foodAllwance")
        }

        break;
      case "otherAllowance":
        if (this.postForm.controls["otherAllowance"].value == false) {
          this.OtherAllowanceAmountValidationMessage = ''
          this.postForm.patchValue({
            otherAllowanceAmount: ''
          })
          // this.postForm.controls['foodAllowanceAmount'].value === ''
          // console.log("inside the foodAllwance")
        }

        break;
      case "educationalAllowance":
        if (this.postForm.controls["educationalAllowance"].value == false) {
          this.EducationAllowanceAmountValidationMessage = ''
          this.postForm.patchValue({
            educationalAllowanceAmount: ''
          })
          // this.postForm.controls['foodAllowanceAmount'].value === ''
          // console.log("inside the foodAllwance")
        }

        break;
      case "travellingAllowances":
        if (this.postForm.controls["travellingAllowances"].value == false) {
          this.TravellingAllowanceAmountValidationMessage = ''
          this.postForm.patchValue({
            travellingAllowancesAmount: ''
          })
          // this.postForm.controls['foodAllowanceAmount'].value === ''
          // console.log("inside the foodAllwance")
        }

        break;
      case "uniformAllowance":
        if (this.postForm.controls["uniformAllowance"].value == false) {
          this.UniformAllowanceAmountValidationMessage = ''
          this.postForm.patchValue({
            uniformAllowanceAmount: ''
          })
          // this.postForm.controls['foodAllowanceAmount'].value === ''
          // console.log("inside the foodAllwance")
        }

        break;
      case "vehicleAllowance":
        if (this.postForm.controls["vehicleAllowance"].value == false) {
          this.VehicleAllowanceAmountValidationMessage = ''
          this.postForm.patchValue({
            vehicleAllowanceAmount: ''
          })
          // this.postForm.controls['foodAllowanceAmount'].value === ''
          // console.log("inside the foodAllwance")
        }

        break;
      case "workedInUAE":
        if (this.postForm.controls['workedInUAE'].value === 'No') {
          this.postForm.get('EmiratesID')?.disable();
        } else {
          this.postForm.get('EmiratesID')?.enable();
        }
        break;
      case "VisaType":
        if (this.postForm.controls['VisaType'].value === 'Tourist Visa') {
          this.postForm.get('workVisaEmirateId')?.disable();
          this.postForm.get('categoryOfVisa')?.disable();
          this.postForm.get('siGlobalWorkVisaCompany')?.disable();
          this.postForm.patchValue({
            workVisaEmirateId: '',
            categoryOfVisa: '',
            siGlobalWorkVisaCompany: ''
          });
        } else {
          this.postForm.get('workVisaEmirateId')?.enable();
          this.postForm.get('categoryOfVisa')?.enable();
          this.postForm.get('siGlobalWorkVisaCompany')?.enable();
          // this.postForm.patchValue({
          //   workVisaEmirateId: '',
          //   categoryOfVisa: '',
          //   siGlobalWorkVisaCompany: ''
          // });
        }
        break;
      case "categoryOfVisa":
        if (this.postForm.controls['categoryOfVisa'].value === 'Own Work Visa') {
          this.postForm.get('siGlobalWorkVisaCompany')?.disable();
        } else {
          this.postForm.get('siGlobalWorkVisaCompany')?.enable();
        }
        break;
      case "managerApproval":
        if (this.postForm.controls['managerApproval'].value === 'Not Approved') {
          this.postForm.get('managerName')?.disable();
          this.postForm.patchValue({
            managerName:''
          })
        } else {
          this.postForm.get('managerName')?.enable();
        }
        break;
      case "criminalRecords":
        if (this.postForm.controls['criminalRecords'].value === 'No') {
          this.postForm.get('RecordSheet')?.disable();
          this.RecordSheetValidationMessage=''
          this.approvalsheetValidationMessage=''

          this.postForm.patchValue({
            RecordSheet:'',
            punishmentForImprisonmentApproval:'',
            approvalsheet:'',
          })
        } else {
          this.postForm.get('RecordSheet')?.enable();
          this.DeclarationValidationMessage=''

          this.postForm.patchValue({
            Declaration:'',
          
          })
        }
        break;

      case "punishmentForImprisonmentApproval":
        if (this.postForm.controls['punishmentForImprisonmentApproval'].value === 'No') {
          this.postForm.get('approvalsheet')?.disable();
        } else {
          this.postForm.get('approvalsheet')?.enable();
        }
        break;
      case "EmailIdProvided":
        if (this.postForm.controls['EmailIdProvided'].value === 'No') {
          this.postForm.get('CompanyEmployeeId')?.disable();
        } else {
          this.postForm.get('CompanyEmployeeId')?.enable();
        }
        break;



      case 'familyHealthInsuranceGivenOrNot':
        if (this.postForm.controls['familyHealthInsuranceGivenOrNot'].value === 'No') {
          this.postForm.get('familyHealthInsuranceType')?.disable();
        } else {
          this.postForm.get('familyHealthInsuranceType')?.enable();
        }
        break;


      case 'drivinglicense':
        if (this.postForm.controls['drivinglicense'].value === 'No') {
          this.postForm.get('scannedCopyOfLincense')?.disable();
          this.LincenseScanCopyValidationMessage = ''
          this.postForm.patchValue({
            scannedCopyOfLincense: '',
            licenseType:'Type Of LincenserentAllocationYesOrNo'
          })
        } else {
          this.postForm.get('scannedCopyOfLincense')?.enable();
        }
        break;
      case 'inHouseOutsource':
        if (this.postForm.controls['inHouseOutsource'].value === 'InHouse') {
          this.postForm.get('CertificateUploadedForOutsource')?.disable();
        } else {
          this.postForm.get('CertificateUploadedForOutsource')?.enable();
        }
        break;
      case 'paidUnpaid':
        if (this.postForm.controls['paidUnpaid'].value === 'Unpaid') {
          this.postForm.get('PaidTrainingDocumentProof')?.disable();
        } else {
          this.postForm.get('PaidTrainingDocumentProof')?.enable();
        }
        break;
    }
  }

  //method for getting post form controls
  get getPostFormControls() {
    return this.postForm.controls;
  }



  //method forinitPostForm initializing the form 
  public initPostForm() {
    this.postForm = this.formBuilder.group({
      // levelId:['',Validators.required],
      designationId: ['', Validators.required],
      namePrefix: 'Prefix',
      firstName: '',
      middleName: '',
      lastName: '',
      dateOfBirth: '',
      age: '',
      maritalStatus: 'Martial-Status',
      phoneCode: 'Code',
      personalContactNo: '',
      citizenship: 'Citizenship',
      passportIssuingCountry: 'Passport Issuing Country',
      email: [''],
      passportSizePhoto: [''],
      passportNumber: '',
      passportScannedCopy: [''],
      passportExpiryDate: '',
      drivinglicense: 'Driving License of UAE',
      licenseType: 'Type Of Lincense',
      scannedCopyOfLincense: [''],
      ownvehicle: 'Personal Vehicle',
      VisaType: ['Type Of Visa'],
      workVisaEmirateId: '',
      categoryOfVisa: 'Categories Of Visa',
      siGlobalWorkVisaCompany: 'Visa issuing company',
      visaIssueyDate: '',
      visaExpiryDate: '',
      VisaScannedCopyOfID: [''],//yaha tak second step ho gya hai 


      // education Qualification

      // secondary details
      secondaryIssuingAuthority: '',
      secondarymarksOrGrade: '',
      secondaryyear: '',
      ScannedCopyOfSecondary: [''],
      // senior secondary details
      seniorSecondaryIssuingAuthority: '',
      seniorSecondaryMarksOrGrade: '',
      seniorSecondaryYear: '',
      ScannedCopyOfSeniorSecondary: [''],
      // graduation details
      graduationIssuingAuthority: '',
      graduationMarksOrGrade: '',
      graduationYear: '',
      ScannedCopyOfGraduation: [''],
      // post graduation details
      postGraduationIssuingAuthority: '',
      postGraduationMarksOrGrade: '',
      postGraduationYear: '',
      ScannedCopyOfPostGraduation: [''],

      // previous employer manager 
      companyName: '',
      designation: '',
      dateFrom: '',
      dateTo: '',







      fathersFirstName: '',
      fathersMiddleName: '',
      fatherLastName: '',
      permanentResidenceCountry: '',
      otherScannedIdProof: [''],
      bloodGroup: '',
      permanentResidentialAddress: '',
      hobbies: [''],
      // bloodRealtive Starts here
      relativenamePrefix: [''],
      RFirstname: [''],
      Rmiddlename: [''],
      Rlastname: [''],
      relationship: [''],
      RphoneCode: [''],
      Rcontactno: [''],
      Raddress: [''],
      ScannedCopyOfRealtiveAddress: [null],
      ScannedCopyOfRealtiveId: [null],
      // Visa Details Start Here
      workedInUAE: '',
      EmiratesID: '',

      DegreeAttestation: '',


      diplomaIssuingAuthority: '',
      diplomaMarksOrGrade: '',
      diplomaYear: '',
      ScannedCopyOfDiploma: [''],

      othersQualifications: this.formBuilder.array([]),
      // others:'',
      // othersIssuingAuthority:'',
      // othersMarksOrGrade:'',
      // othersYear:'',
      // ScannedCopyOfOther:[''],


      // Professional education

      professionalQualifications: this.formBuilder.array([]),

      // previous employer manager 
      // companyName: '',
      // designation: '',
      // dateFrom: '',
      // dateTo: '',
      companyAddress: '',
      description: '',
      previousManagerName: '',
      previousManagerPhoneCode: '',
      previousManagerContact: '',
      previousHRName: '',
      previousHRPhoneCode: '',
      previousHRContact: '',

      // achievementsRewards: '',
      // ScanCopyOfAchivements: this.formBuilder.array([]),
      empAchievements: this.formBuilder.array([]),
      lastWithdrawnSalary: null,
      SalaryScannedCopy: [null],


      // background Check
      status: '',
      doneBy: '',
      internalConcernedManager: '',
      externalConcernedPerson: '',
      externalPost: '',
      externalCompanyName: '',
      externalPhoneCode: '',
      externalPhoneNo: '',
      managerApproval: '',
      managerName: '',
      remark: '',
      // document verification
      addressVerified: '',
      previousEmploymentStatusVerified: '',
      previousDesignationAndResponsibilityVerified: '',
      idProofDocumentVerified: '',
      educationalQualificationVerified: '',
      // Criminal Record
      criminalRecords: '',
      RecordSheet: [''],
      punishmentForImprisonmentApproval: '',
      approvalsheet: '',
      Declaration: [''],
      // Training Details
      trainingType: '',
      inHouseOutsource: '',
      paidUnpaid: '',
      CertificateUploadedForOutsource: [''], // employee krga
      PaidTrainingDocumentProof: [''], // yeh bhi employee
      trainingStartDate: '',
      trainingEndDate: '',
      trainerName: '',
      trainerPost: '',
      trainerDepartment: '',
      trainerPhoneCode: '',
      trainerPhoneNo: '',
      trainerFeedback: '',// yehi bhi employee fill krga
      // jobs Details
      jobPostDesignation: '',
      jobdepartment: ['', Validators.required],
      companyEmailIdProvided: '',
      companyEmailId: '',
      jobLevel: '',
      postedLocation: ['', Validators.required],
      // payscale
      basicAllowance: '',
      houseRentAllowance: [false],
      // houseRentAllowance: '',
      houseRentAmount: [null],
      // houseRentAmount: '',
      foodAllowance: [false],
      foodAllowanceAmount: '',
      vehicleAllowance: [false],
      vehicleAllowanceAmount: '',
      uniformAllowance: [false],
      uniformAllowanceAmount: '',
      travellingAllowances: '',
      travellingAllowancesAmount: '',
      educationalAllowance: '',
      educationalAllowanceAmount: '',
      otherAllowance: '',
      otherAllowanceAmount: '',
      vehicle: '',
      vehicleNumber: '',
      vehicleModelName: '',
      vehicleModelYear: '',
      isVehicleNewOrPreowned: '',
      vehicleFuelCashFacility: '',
      vehicleFuelChipFacility: '',
      cashAmount: '',

      accommodationYesOrNo: '',
      isShredOrSeparate: '',
      isExeutiveOrLabourFacility: '',
      electricityAllocationYesOrNo: '',
      electricityAllocationAmount: '',
      rentAllocationYesOrNo: '',
      rentAllocationAmount: '',
      mobileIssuedOrNot: '',
      simIssuedOrNot: '',
      flightFacilities: '',
      howMuchTime: '',
      familyTicketsAlsoProvidedOrNot: '',
      othersAccomandation: '',

      healthInsuranceCoverage: '',
      maximumAmountGiven: '',
      familyHealthInsuranceGivenOrNot: '',
      familyHealthInsuranceType: '',
      joiningDate: '',
      punchingMachineYesOrNo: '',
      ReferedBy: '',
      ReferenceName: '',
      // role:['',Validators.required],
      onboardHrApprovalStatus: ['pending']
    })

  }


  // updateHouseRentAmountValidity() {
  //   this.postForm.get('houseRentAmount')?.updateValueAndValidity();
  // }

  // allowanceAmountValidator(allowanceControlName: string): any {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const checkboxValue = control?.parent?.get(allowanceControlName)?.value;
  //     const amountValue = control.value;
  //     if (checkboxValue && !amountValue) {
  //       return { required: true };
  //     }
  //     return null;
  //   };
  // }


  get empAchievements() {
    return this.postForm.get('empAchievements') as FormArray;
  }

  addempAchievementsField() {

    const achievementsRewardsfieldGroup = this.formBuilder.group({
      achievementRewardsName: ''
      // ScannedCopyOfOther: [],
    });
    this.empAchievements.push(achievementsRewardsfieldGroup);
  }




  removeempAchievementsField(index: number) {
    this.empAchievements.removeAt(index);
  }

  // Getter for easy access to the dynamicFields FormArray for other qualification
  get othersQualifications() {
    return this.postForm.get('othersQualifications') as FormArray;
  }

  // Add a new field group to the dynamicFields FormArray other qualification
  addField() {
    const fieldGroup = this.formBuilder.group({
      others: '',
      othersIssuingAuthority: '',
      othersMarksOrGrade: '',
      othersYear: '',
      // ScannedCopyOfOther: [],
    });
    this.othersQualifications.push(fieldGroup);
  }

  // Remove a field group from the dynamicFields FormArray other qualification
  removeField(index: number) {
    this.othersQualifications.removeAt(index);
  }


  // Getter for easy access to the dynamicFields FormArray for other qualification
  get professionalQualifications() {
    return this.postForm.get('professionalQualifications') as FormArray;
  }

  // Add a new field group to the dynamicFields FormArray other qualification
  addprofessionalQualificationsField() {
    const fieldGroupForPro = this.formBuilder.group({
      qualification: '',
      issuingAuthority: '',
      gradingSystem: 'Grading System',
      grade: '',
      yearOfQualification: '',
      // ScannedCopyOfCourseCompleted: [''],
    });
    this.professionalQualifications.push(fieldGroupForPro);
  }

  // Remove a field group from the dynamicFields FormArray other qualification
  removeprofessionalQualificationsField(index: number) {
    this.professionalQualifications.removeAt(index);
  }

  hideThePrefixValidationMessage() {
    this.PrefixValidationMessage = ''
  }
  hideThefirstValidationMessage() {
    this.firstNameValidationMessage = ''
  }
  hideThelastValidationMessage() {
    this.lastNameValidationMessage = '';
  }
  hideTheemailValidationMessage() {
    this.emailValidationMessage = ';'
  }
  hideThePhonecodeValidationMessage() {
    this.phoneCodeValidationMessage = '';
  }
  hideThePersonalContactValidationMessage() {
    this.personalContactValidationMessage = ''
  }
  hideThedobValidationMessage() {
    this.dobValidationMessage = ''
  }
  hideThepassportSizePhotoValidationMessage() {
    this.passportSizePhotoValidationMessage = ''
  }
  hideThepassportNumberValidationMessage() {
    this.passportNumberValidationMessage = ''
  }
  hideThepassportScanCopyValidationMessage() {
    this.passportScanCopyValidationMessage = ''
  }
  hideTheLincenseScanCopyValidationMessage() {
    this.LincenseScanCopyValidationMessage = '';
  }
  hideThebgStatusValidationMessage() {
    this.bgStatusValidationMessage = '';
  }
  hideThedoneByValidationMessage() {

    this.doneByValidationMessage = ''
  }
  hideTheinternalConcernedManagerValidationMessage() {
    this.internalConcernedManagerValidationMessage = ''
  }
  hideTheexternalConcernedManagerValidationMessage() {
    this.externalConcernedManagerValidationMessage = ''
  }
  hideTheexternalPostManagerValidationMessage() {
    this.externalPostValidationMessage = ''
  }
  hideTheexternalCompanyNameValidationMessage() {
    this.externalCompanyNameValidationMessage = ''
  }
  hideTheexternalPhoneCodeValidationMessage() {
    this.externalPhoneCodeValidationMessage = ''
  }
  hideTheexternalPhoneNoValidationMessage() {
    this.externalPhoneNoValidationMessage = ''
  }
  hideThemanagerApprovalforbgValidationMessage() {
    this.managerApprovalforbgValidationMessage = ''
  }
  hideThemanagerApprovalNameforbgValidationMessage() {
    this.managerApprovalNameforbgValidationMessage = ''
  }
  //for validation variable 
  ValidationMessage = '';
  PrefixValidationMessage = '';
  firstNameValidationMessage = ''
  lastNameValidationMessage = ''

  emailValidationMessage = ''
  phoneCodeValidationMessage = ''
  personalContactValidationMessage = ''
  dobValidationMessage = ''
  passportSizePhotoValidationMessage = ''
  passportNumberValidationMessage = ''
  passportScanCopyValidationMessage = ''
  LincenseScanCopyValidationMessage = ''



  //step 2
  bgStatusValidationMessage = ''
  doneByValidationMessage = ''
  internalConcernedManagerValidationMessage = ''
  externalConcernedManagerValidationMessage = ''
  externalPostValidationMessage = ''
  externalCompanyNameValidationMessage = ''
  externalPhoneCodeValidationMessage=''
  externalPhoneNoValidationMessage=''
  managerApprovalforbgValidationMessage=''
  managerApprovalNameforbgValidationMessage=''








  //step4
  hideThecriminalRecordsValidationMessage() {
    this.criminalRecordsValidationMessage = ''
  }
  hideTheDeclarationValidationMessage() {
    this.DeclarationValidationMessage = ''
  }
  hideTheRecordSheetValidationMessage() {
    this.RecordSheetValidationMessage = ''
  }
  hideTheapprovalsheetValidationMessage() {
    this.approvalsheetValidationMessage = ''
  }

  criminalRecordsValidationMessage=''
  DeclarationValidationMessage=''
  RecordSheetValidationMessage=''
  approvalsheetValidationMessage=''






  hideTheHouseRentValidationMessage() {
    this.HouseRentAmountValidationMessage = '';
  }
  hideTheFoodAllowanceValidationMessage() {
    this.FoodAllowanceAmountValidationMessage = '';
  }
  hideTheVehicleAllowanceValidationMessage() {
    this.VehicleAllowanceAmountValidationMessage = '';
  }
  hideTheUniformAllowanceValidationMessage() {
    this.UniformAllowanceAmountValidationMessage = '';
  }
  hideTheTravellingAllowanceValidationMessage() {
    this.TravellingAllowanceAmountValidationMessage = '';
  }
  hideTheEducationAllowanceValidationMessage() {
    this.EducationAllowanceAmountValidationMessage = '';
  }
  hideTheOtherAllowanceValidationMessage() {
    this.OtherAllowanceAmountValidationMessage = '';
  }
  hideTheVehicleIssuedValidationMessage() {
    this.VehicleIssuedValidationMessage = '';
  }
  hideThevehicleNumberValidationMessage() {
    this.vehicleNumberAmountValidationMessage = '';
  }
  hideThevehicleModelNameValidationMessageValidationMessage() {
    this.vehicleModelNameValidationMessage = '';
  }
  hideThevehicleModelYearValidationMessageValidationMessage() {
    this.vehicleModelYearValidationMessage = '';
  }
  //  RentAmountValidationMessage=''
  HouseRentAmountValidationMessage = ''
  FoodAllowanceAmountValidationMessage = ''
  VehicleAllowanceAmountValidationMessage = ''
  UniformAllowanceAmountValidationMessage = ''
  TravellingAllowanceAmountValidationMessage = ''
  EducationAllowanceAmountValidationMessage = ''
  OtherAllowanceAmountValidationMessage = ''
  VehicleIssuedValidationMessage = ''
  vehicleNumberAmountValidationMessage = ''
  vehicleModelNameValidationMessage = ''
  vehicleModelYearValidationMessage = ''





  // step 7
  hideThecashAmountAmountValidationMessage() {
    this.cashAmountAmountValidationMessage = '';
  }
  hideThevehicleFuelChipFacilityValidationMessage() {
    this.vehicleFuelChipFacilityValidationMessage = '';
  }
  hideTheelectricityAllocationAmountValidationMessage() {
    this.electricityAllocationAmountValidationMessage = '';
  }
  hiderentAllocationAmountValidationMessage() {
    this.rentAllocationAmountValidationMessage = '';
  }
  hidehowMuchTimetValidationMessage() {
    this.howMuchTimetValidationMessage = '';
  }
  hidefamilyHealthInsuranceTypeValidationMessage() {
    this.familyHealthInsuranceTypeValidationMessage = '';
  }
  hidemaximumAmountGivenValidationMessage() {
    this.maximumAmountGivenValidationMessage = '';
  }

  cashAmountAmountValidationMessage=''
  vehicleFuelChipFacilityValidationMessage=''
  electricityAllocationAmountValidationMessage=''
  rentAllocationAmountValidationMessage=''
  howMuchTimetValidationMessage=''
  familyHealthInsuranceTypeValidationMessage=''
  maximumAmountGivenValidationMessage=''

  public next() {
    // this.step=this.step+1
    console.log(this.step)

    if (this.step == 1) {
      let isValid = true; // Pehle `isValid` ko `true` mein set karein

      if (this.postForm.get('namePrefix').value != 'Prefix' && this.postForm.get('namePrefix').value != null) {
        this.PrefixValidationMessage = '';
        console.log("inside the prefix");
      } else {
        this.PrefixValidationMessage = 'Fill the required field';
        isValid = false; // Agar field galat hai, to `isValid` ko `false` mein set karein
      }

      if (this.postForm.get('firstName').value != '' && this.postForm.get('firstName').value != null) {
        this.firstNameValidationMessage = '';
        console.log("inside the first name");
      } else {
        this.firstNameValidationMessage = 'Fill the required field';
        isValid = false; // Agar field galat hai, to `isValid` ko `false` mein set karein
      }
      if (this.postForm.get('lastName').value != '' && this.postForm.get('lastName').value != null) {
        this.lastNameValidationMessage = '';
        console.log("inside the last name");
      } else {
        this.lastNameValidationMessage = 'Fill the required field';
        isValid = false; // Agar field galat hai, to `isValid` ko `false` mein set karein
      }
      if (this.postForm.get('email').value != '' && this.postForm.get('email').value != null) {
        this.emailValidationMessage = '';
        console.log("inside the last name");
      } else {
        this.emailValidationMessage = 'Fill the required field';
        isValid = false; // Agar field galat hai, to `isValid` ko `false` mein set karein
      }
      if (this.postForm.get('phoneCode').value != 'Code' && this.postForm.get('phoneCode').value != null) {
        this.phoneCodeValidationMessage = '';
        console.log("inside the inside the phone code ");
      } else {
        this.phoneCodeValidationMessage = 'Fill the required field';
        isValid = false; // Agar field galat hai, to `isValid` ko `false` mein set karein
      }
      if (this.postForm.get('personalContactNo').value != '' && this.postForm.get('personalContactNo').value != null) {
        this.personalContactValidationMessage = '';
        console.log("inside the inside the phone code ");
      } else {
        this.personalContactValidationMessage = 'Fill the required field';
        isValid = false; // Agar field galat hai, to `isValid` ko `false` mein set karein
      }
      if (this.postForm.get('dateOfBirth').value != '' && this.postForm.get('dateOfBirth').value != null) {
        this.dobValidationMessage = '';
        console.log("inside the inside the phone code ");
      } else {
        this.dobValidationMessage = 'Fill the required field';
        isValid = false; // Agar field galat hai, to `isValid` ko `false` mein set karein
      }
      if (this.postForm.get('passportSizePhoto').value != '' && this.postForm.get('passportSizePhoto').value != null) {
        this.passportSizePhotoValidationMessage = '';
        console.log("inside the inside the phone code ");
      } else {
        this.passportSizePhotoValidationMessage = 'Fill the required field';
        isValid = false; // Agar field galat hai, to `isValid` ko `false` mein set karein
      }
      if (this.postForm.get('passportNumber').value != '' && this.postForm.get('passportNumber').value != null) {
        this.passportNumberValidationMessage = '';
        console.log("inside the inside the phone code ");
      } else {
        this.passportNumberValidationMessage = 'Fill the required field';
        isValid = false; // Agar field galat hai, to `isValid` ko `false` mein set karein
      }
      if (this.postForm.get('passportScannedCopy').value != '' && this.postForm.get('passportScannedCopy').value != null) {
        this.passportScanCopyValidationMessage = '';
        console.log("inside the inside the phone code ");
      } else {
        this.passportScanCopyValidationMessage = 'Fill the required field';
        isValid = false; // Agar field galat hai, to `isValid` ko `false` mein set karein
      }
      if (this.postForm.get('drivinglicense').value != 'Driving License of UAE' && this.postForm.get('drivinglicense').value != null) {


        if (this.postForm.get('drivinglicense').value == 'Yes') {
          if (this.postForm.get('scannedCopyOfLincense').value != '' && this.postForm.get('scannedCopyOfLincense').value != null) {
            this.LincenseScanCopyValidationMessage = '';
            console.log("inside the inside the phone code ");
          } else {
            this.LincenseScanCopyValidationMessage = 'Fill the required field';
            isValid = false; // Agar field galat hai, to `isValid` ko `false` mein set karein
          }

        } else {
          // isValid = true;
          this.LincenseScanCopyValidationMessage = ''
        }
        // console.log("inside the inside the phone code ");
      } else {
        // this.passportScanCopyValidationMessage = 'Fill the required field';
        this.toastr.error("please first select that u have lincense or not ")
        isValid = false; // Agar field galat hai, to `isValid` ko `false` mein set karein
      }




      if (isValid) {
        this.step = this.step + 1; // Sirf tabhi `step` ko increment karein jab `isValid` `true` ho
      }
    }

    else if (this.step == 2) {

      this.step = this.step + 1
    }
    else if (this.step == 3) {
      let isValid = true;
      if (this.postForm.get('status').value != '' && this.postForm.get('status').value != null) {
        this.bgStatusValidationMessage = '';
        console.log("inside the inside the phone code ");
      } else {
        this.bgStatusValidationMessage = 'Fill the required field';

        isValid = false;
      }


      if (this.postForm.get('status').value == "Done") {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('doneBy').value != '' && this.postForm.get('doneBy').value != null) {
          this.doneByValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.doneByValidationMessage = 'Fill the required field'
          isValid = false


        }

      } else {
        this.doneByValidationMessage = '';

      }
      if (this.postForm.get('doneBy').value == "Internal") {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('internalConcernedManager').value != '' && this.postForm.get('internalConcernedManager').value != null) {
          this.internalConcernedManagerValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.internalConcernedManagerValidationMessage = 'Fill the required field'
          isValid = false


        }

      } else {
        this.internalConcernedManagerValidationMessage = '';

      }
      if (this.postForm.get('doneBy').value == "External") {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('externalConcernedPerson').value != '' && this.postForm.get('externalConcernedPerson').value != null) {
          this.externalConcernedManagerValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.externalConcernedManagerValidationMessage = 'Fill the required field'
          isValid = false


        }

      } else {
        this.externalConcernedManagerValidationMessage = '';

      }
      if (this.postForm.get('doneBy').value == "External") {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('externalPost').value != '' && this.postForm.get('externalPost').value != null) {
          this.externalPostValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.externalPostValidationMessage = 'Fill the required field'
          isValid = false


        }

      } else {
        this.externalPostValidationMessage = '';

      }
      if (this.postForm.get('doneBy').value == "External") {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('externalCompanyName').value != '' && this.postForm.get('externalCompanyName').value != null) {
          this.externalCompanyNameValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.externalCompanyNameValidationMessage = 'Fill the required field'
          isValid = false
        }
      } else {
        this.externalCompanyNameValidationMessage = '';

      }
      if (this.postForm.get('doneBy').value == "External") {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('externalPhoneCode').value != '' && this.postForm.get('externalPhoneCode').value != null) {
          this.externalPhoneCodeValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.externalPhoneCodeValidationMessage = 'Fill the required field'
          isValid = false
        }
      } else {
        this.externalPhoneCodeValidationMessage = '';

      }
      if (this.postForm.get('doneBy').value == "External") {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('externalPhoneNo').value != '' && this.postForm.get('externalPhoneNo').value != null) {
          this.externalPhoneNoValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.externalPhoneNoValidationMessage = 'Fill the required field'
          isValid = false
        }
      } else {
        this.externalPhoneNoValidationMessage = '';

      }


      if (this.postForm.get('status').value == "Pending") {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('managerApproval').value != '' && this.postForm.get('managerApproval').value != null) {
          this.managerApprovalforbgValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.managerApprovalforbgValidationMessage = 'Fill the required field'
          isValid = false


        }

      } else {
        this.managerApprovalforbgValidationMessage = '';

      }
      if (this.postForm.get('managerApproval').value == "Approved") {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('managerName').value != '' && this.postForm.get('managerName').value != null) {
          this.managerApprovalNameforbgValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.managerApprovalNameforbgValidationMessage = 'Fill the required field'
          isValid = false


        }

      } else {
        this.managerApprovalNameforbgValidationMessage = '';

      }




      if (isValid) {
        this.step = this.step + 1; // Sirf tabhi `step` ko increment karein jab `isValid` `true` ho
      }
      // console.log("inside step 2")
      // this.step = this.step + 1
    }
    else if (this.step == 4) {
      let isValid = true;
      if (this.postForm.get('criminalRecords').value != '' && this.postForm.get('criminalRecords').value != null) {
        this.criminalRecordsValidationMessage = '';
        console.log("inside the inside the phone code ");
      } else {
        this.criminalRecordsValidationMessage = 'Fill the required field';

        isValid = false;
      }


      if (this.postForm.get('criminalRecords').value == "No") {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('Declaration').value != '' && this.postForm.get('Declaration').value != null) {
          this.DeclarationValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.DeclarationValidationMessage = 'Fill the required field'
          isValid = false
        }
      } else {
        this.DeclarationValidationMessage = '';

      }
      if (this.postForm.get('criminalRecords').value == "Yes") {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('RecordSheet').value != '' && this.postForm.get('RecordSheet').value != null) {
          this.RecordSheetValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.RecordSheetValidationMessage = 'Fill the required field'
          isValid = false
        }
      } else {
        this.RecordSheetValidationMessage = '';

      }
      if (this.postForm.get('punishmentForImprisonmentApproval').value == "Yes") {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('approvalsheet').value != '' && this.postForm.get('approvalsheet').value != null) {
          this.approvalsheetValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.approvalsheetValidationMessage = 'Fill the required field'
          isValid = false
        }
      } else {
        this.approvalsheetValidationMessage = '';

      }





      if (isValid) {
        this.step = this.step + 1; // Sirf tabhi `step` ko increment karein jab `isValid` `true` ho
      }

      // console.log("inside step 4")
      // this.step = this.step + 1


    }
    else if (this.step == 5) {
      let isValid = true;
      // if (this.postForm.get('houseRentAllowance').value == true && this.postForm.get('houseRentAllowance').value != null) {
      //  console.log(this.postForm.get('houseRentAllowance').value)
      if (this.postForm.get('houseRentAllowance').value == true) {
        // this.HouseRentAmountValidationMessage = '';
        console.log(this.postForm.get('houseRentAmount').value)
        if (this.postForm.get('houseRentAmount').value != '' && this.postForm.get('houseRentAmount').value != null) {
          this.HouseRentAmountValidationMessage = ''
          console.log("inside the if block of House Rent Amount")
        } else {
          this.HouseRentAmountValidationMessage = 'Fill the required field'
          console.log(this.HouseRentAmountValidationMessage)
          this.toastr.error(this.HouseRentAmountValidationMessage, "House Rent Amount")
          isValid = false


        }

      } else {
        this.HouseRentAmountValidationMessage = '';

      }
      if (this.postForm.get('foodAllowance').value == true) {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('foodAllowanceAmount').value != '' && this.postForm.get('foodAllowanceAmount').value != null) {
          this.FoodAllowanceAmountValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.FoodAllowanceAmountValidationMessage = 'Fill the required field'
          isValid = false


        }

      } else {
        this.HouseRentAmountValidationMessage = '';

      }
      if (this.postForm.get('foodAllowance').value == true) {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('foodAllowanceAmount').value != '' && this.postForm.get('foodAllowanceAmount').value != null) {
          this.FoodAllowanceAmountValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.FoodAllowanceAmountValidationMessage = 'Fill the required field'
          isValid = false


        }

      } else {
        this.HouseRentAmountValidationMessage = '';

      }
      if (this.postForm.get('vehicleAllowance').value == true) {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('vehicleAllowanceAmount').value != '' && this.postForm.get('vehicleAllowanceAmount').value != null) {
          this.VehicleAllowanceAmountValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.VehicleAllowanceAmountValidationMessage = 'Fill the required field'
          isValid = false
        }

      } else {
        this.VehicleAllowanceAmountValidationMessage = '';

      }
      if (this.postForm.get('uniformAllowance').value == true) {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('uniformAllowanceAmount').value != '' && this.postForm.get('uniformAllowanceAmount').value != null) {
          this.UniformAllowanceAmountValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.UniformAllowanceAmountValidationMessage = 'Fill the required field'
          isValid = false
        }

      } else {
        this.UniformAllowanceAmountValidationMessage = '';

      }
      if (this.postForm.get('travellingAllowances').value == true) {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('travellingAllowancesAmount').value != '' && this.postForm.get('travellingAllowancesAmount').value != null) {
          this.TravellingAllowanceAmountValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.TravellingAllowanceAmountValidationMessage = 'Fill the required field'
          isValid = false
        }

      } else {
        this.TravellingAllowanceAmountValidationMessage = '';

      }
      if (this.postForm.get('educationalAllowance').value == true) {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('educationalAllowanceAmount').value != '' && this.postForm.get('educationalAllowanceAmount').value != null) {
          this.EducationAllowanceAmountValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.EducationAllowanceAmountValidationMessage = 'Fill the required field'
          isValid = false
        }

      } else {
        this.EducationAllowanceAmountValidationMessage = '';

      }
      if (this.postForm.get('otherAllowance').value == true) {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('otherAllowanceAmount').value != '' && this.postForm.get('otherAllowanceAmount').value != null) {
          this.OtherAllowanceAmountValidationMessage = ''
          console.log("inside the if block of food Allowance")
        } else {
          this.OtherAllowanceAmountValidationMessage = 'Fill the required field'
          isValid = false
        }

      } else {
        this.OtherAllowanceAmountValidationMessage = '';

      }


      if (this.postForm.get('vehicle').value != '' && this.postForm.get('vehicle').value != null) {
        this.VehicleIssuedValidationMessage = '';
        console.log("inside the inside the phone code ");
      } else {
        this.VehicleIssuedValidationMessage = 'Fill the required field';
        console.log("inside the inside the vehicle else part ")
        isValid = false; // Agar field galat hai, to `isValid` ko `false` mein set karein
      }


      if (this.postForm.get('vehicle').value == "Yes") {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('vehicleNumber').value != '' && this.postForm.get('vehicleNumber').value != null) {
          this.vehicleNumberAmountValidationMessage = ''
          console.log("inside the if block of food Allowance")
        }

        else {
          this.vehicleNumberAmountValidationMessage = 'Fill the required field'
          isValid = false
        }

      } else {
        this.vehicleNumberAmountValidationMessage = '';

      }
      if (this.postForm.get('vehicleNumber').value != "" && this.postForm.get('vehicleNumber').value != null) {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('vehicleModelName').value != '' && this.postForm.get('vehicleModelName').value != null) {
          this.vehicleModelNameValidationMessage = ''
          console.log("inside the if block of food Allowance")
        }

        else {
          this.vehicleModelNameValidationMessage = 'Fill the required field'
          isValid = false
        }

      } else {
        this.vehicleModelNameValidationMessage = '';

      }
      if (this.postForm.get('vehicleModelName').value != "" && this.postForm.get('vehicleModelName').value != null) {
        // this.HouseRentAmountValidationMessage = '';
        if (this.postForm.get('vehicleModelYear').value != '' && this.postForm.get('vehicleModelYear').value != null) {
          this.vehicleModelYearValidationMessage = ''
          console.log("inside the if block of food Allowance")
        }

        else {
          this.vehicleModelYearValidationMessage = 'Fill the required field'
          isValid = false
        }

      } else {
        this.vehicleModelYearValidationMessage = '';

      }







      if (isValid) {
        this.step = this.step + 1; // Sirf tabhi `step` ko increment karein jab `isValid` `true` ho
      }
      // console.log("inside step 2", this.step)
      // this.step = this.step + 1
    }
    else if (this.step == 6){
      let isValid = true;
      // if (this.postForm.get('houseRentAllowance').value == true && this.postForm.get('houseRentAllowance').value != null) {
      //  console.log(this.postForm.get('houseRentAllowance').value)
      if (this.postForm.get('vehicleFuelCashFacility').value == "Cash") {
        // this.HouseRentAmountValidationMessage = '';
        console.log(this.postForm.get('houseRentAmount').value)
        if (this.postForm.get('cashAmount').value != '' && this.postForm.get('cashAmount').value != null) {
          this.cashAmountAmountValidationMessage = ''
          console.log("inside the if block of House Rent Amount")
        } else {
          this.cashAmountAmountValidationMessage = 'Fill the required field'
          console.log(this.HouseRentAmountValidationMessage)
          // this.toastr.error(this.HouseRentAmountValidationMessage, "House Rent Amount")
          isValid = false


        }

      } else {
        this.cashAmountAmountValidationMessage = '';

      }
      if (this.postForm.get('vehicleFuelCashFacility').value == "Chip") {
        
        if (this.postForm.get('vehicleFuelChipFacility').value != '' && this.postForm.get('vehicleFuelChipFacility').value != null) {
          this.vehicleFuelChipFacilityValidationMessage = ''
          console.log("inside the if block of House Rent Amount")
        } else {
          this.vehicleFuelChipFacilityValidationMessage = 'Fill the required field'
          // console.log(this.HouseRentAmountValidationMessage)
          // this.toastr.error(this.HouseRentAmountValidationMessage, "House Rent Amount")
          isValid = false


        }

      } else {
        this.vehicleFuelChipFacilityValidationMessage = '';

      }
      if (this.postForm.get('electricityAllocationYesOrNo').value == "Yes") {
        
        if (this.postForm.get('electricityAllocationAmount').value != '' && this.postForm.get('electricityAllocationAmount').value != null) {
          this.electricityAllocationAmountValidationMessage = ''
          console.log("inside the if block of House Rent Amount")
        } else {
          this.electricityAllocationAmountValidationMessage = 'Fill the required field'
          // console.log(this.HouseRentAmountValidationMessage)
          // this.toastr.error(this.HouseRentAmountValidationMessage, "House Rent Amount")
          isValid = false
        }

      } else {
        this.electricityAllocationAmountValidationMessage = '';

      }
      if (this.postForm.get('rentAllocationYesOrNo').value == "Yes") {
        
        if (this.postForm.get('rentAllocationAmount').value != '' && this.postForm.get('rentAllocationAmount').value != null) {
          this.rentAllocationAmountValidationMessage = ''
          console.log("inside the if block of House Rent Amount")
        } else {
          this.rentAllocationAmountValidationMessage = 'Fill the required field'
          // console.log(this.HouseRentAmountValidationMessage)
          // this.toastr.error(this.HouseRentAmountValidationMessage, "House Rent Amount")
          isValid = false
        }

      } else {
        this.rentAllocationAmountValidationMessage = '';

      }
      if (this.postForm.get('flightFacilities').value == "Yes") {
        
        if (this.postForm.get('howMuchTime').value != '' && this.postForm.get('howMuchTime').value != null) {
          this.howMuchTimetValidationMessage = ''
          console.log("inside the if block of House Rent Amount")
        } else {
          this.howMuchTimetValidationMessage = 'Fill the required field'
          // console.log(this.HouseRentAmountValidationMessage)
          // this.toastr.error(this.HouseRentAmountValidationMessage, "House Rent Amount")
          isValid = false
        }

      } else {
        this.howMuchTimetValidationMessage = '';

      }
      if (this.postForm.get('familyHealthInsuranceGivenOrNot').value == "Yes") {
        
        if (this.postForm.get('familyHealthInsuranceType').value != '' && this.postForm.get('familyHealthInsuranceType').value != null) {
          this.familyHealthInsuranceTypeValidationMessage = ''
          // console.log("inside the if block of House Rent Amount")
        } else {
          this.familyHealthInsuranceTypeValidationMessage = 'Fill the required field'
          // console.log(this.HouseRentAmountValidationMessage)
          // this.toastr.error(this.HouseRentAmountValidationMessage, "House Rent Amount")
          isValid = false
        }

      } else {
        this.familyHealthInsuranceTypeValidationMessage = '';

      }
      if (this.postForm.get('healthInsuranceCoverage').value == "Yes") {
        
        if (this.postForm.get('maximumAmountGiven').value != '' && this.postForm.get('maximumAmountGiven').value != null) {
          this.maximumAmountGivenValidationMessage = ''
          // console.log("inside the if block of House Rent Amount")
        } else {
          this.maximumAmountGivenValidationMessage = 'Fill the required field'
          // console.log(this.HouseRentAmountValidationMessage)
          // this.toastr.error(this.HouseRentAmountValidationMessage, "House Rent Amount")
          isValid = false
        }

      } else {
        this.maximumAmountGivenValidationMessage = '';

      }



      if (isValid) {
        this.step = this.step + 1; // Sirf tabhi `step` ko increment karein jab `isValid` `true` ho
      }
      // this.step=this.step+1

    }
    // else if (this.step == 7){
    //   this.step=this.step+1

    // }

  }



  public previous() {
    this.step = this.step - 1;
  }

  //method for submitting the form value
  public onSubmit() {






    // this.step=this.step + 1;
    // console.log(this.postForm.value);

    // console.log(this.postForm.value.VisaScannedCopyOfID)
    if (this.postForm.valid) {
      // let role={
      //   role: [this.postForm.value.role]
      // }
      let formDetail = {
        filledForm: false,
        onboardHrApprovalStatus: this.postForm.value.onboardHrApprovalStatus,
        namePrefix: this.postForm.value.namePrefix,
        firstName: this.postForm.value.firstName,
        middleName: this.postForm.value.middleName,
        lastName: this.postForm.value.lastName,
        fathersFirstName: this.postForm.value.fathersFirstName,
        fathersMiddleName: this.postForm.value.fathersMiddleName,
        fathersLastName: this.postForm.value.fatherLastName,
        dateOfBirth: this.datePipe.transform(this.postForm.value.dateOfBirth, 'dd-MM-yyyy'),
        age: this.postForm.value.age,
        maritalStatus: this.postForm.value.maritalStatus,
        phoneCode: this.postForm.value.phoneCode,
        personalContactNo: this.postForm.value.personalContactNo,
        email: this.postForm.value.email,
        citizenship: this.postForm.value.citizenship,
        workedInUAE: this.postForm.value.workedInUAE,
        emiratesID: this.postForm.value.EmiratesID,
        // DegreeAttestation: this.postForm.value.DegreeAttestation,
        degreeAttestation: this.postForm.value.DegreeAttestation,
        bloodGroup: this.postForm.value.bloodGroup,
        permanentResidenceCountry: this.postForm.value.permanentResidenceCountry,
        permanentResidentialAddress: this.postForm.value.permanentResidentialAddress,
        hobbies: this.postForm.value.hobbies,

        educations: [{
          // secondary details
          secondaryIssuingAuthority: this.postForm.value.secondaryIssuingAuthority,
          secondarymarksOrGrade: this.postForm.value.secondarymarksOrGrade,
          secondaryyear: this.postForm.value.secondaryyear,

          // senior secondary details
          seniorSecondaryIssuingAuthority: this.postForm.value.seniorSecondaryIssuingAuthority,
          seniorSecondaryMarksOrGrade: this.postForm.value.seniorSecondaryMarksOrGrade,
          seniorSecondaryYear: this.postForm.value.seniorSecondaryYear,


          // graduation details
          graduationIssuingAuthority: this.postForm.value.graduationIssuingAuthority,
          graduationMarksOrGrade: this.postForm.value.graduationMarksOrGrade,
          graduationYear: this.postForm.value.graduationYear,


          // post graduation details
          postGraduationIssuingAuthority: this.postForm.value.postGraduationIssuingAuthority,
          postGraduationMarksOrGrade: this.postForm.value.postGraduationMarksOrGrade,
          postGraduationYear: this.postForm.value.postGraduationYear,




          // diploma details
          diplomaIssuingAuthority: this.postForm.value.diplomaIssuingAuthority,
          diplomaMarksOrGrade: this.postForm.value.diplomaMarksOrGrade,
          diplomaYear: this.postForm.value.diplomaYear,
        }
        ],
        // passport
        psDetail: {
          passportIssuingCountry: this.postForm.value.passportIssuingCountry,
          passportNumber: this.postForm.value.passportNumber,
          passportExpiryDate: this.postForm.value.passportExpiryDate,

        },

        // license

        license: {
          drivinglicense: this.postForm.value.drivinglicense,
          licenseType: this.postForm.value.licenseType,
          ownvehicle: this.postForm.value.ownvehicle,

        },
        relative: {
          // Blood Realative

          relativenamePrefix: this.postForm.value.relativenamePrefix,
          rfirstname: this.postForm.value.RFirstname,
          rmiddlename: this.postForm.value.Rmiddlename,
          rlastname: this.postForm.value.Rlastname,
          relationship: this.postForm.value.relationship,
          rphoneCode: this.postForm.value.RphoneCode,
          rcontactno: this.postForm.value.Rcontactno,
          raddress: this.postForm.value.Raddress,

        },
        visainfo: {
          // Visa Details 
          visaType: this.postForm.value.VisaType,
          workVisaEmirateId: this.postForm.value.workVisaEmirateId,
          categoryOfVisa: this.postForm.value.categoryOfVisa,
          siGlobalWorkVisaCompany: this.postForm.value.siGlobalWorkVisaCompany,
          visaIssueyDate: this.datePipe.transform(this.postForm.value.visaIssueyDate, 'dd-MM-yyyy'),
          visaExpiryDate: this.datePipe.transform(this.postForm.value.visaExpiryDate, 'dd-MM-yyyy'),

        },
        // professionalQualifications: [{
        //   // profesional details
        //   qualification: this.postForm.value.qualification,
        //   issuingAuthority: this.postForm.value.issuingAuthority,
        //   gradingSystem: this.postForm.value.gradingSystem,
        //   grade: this.postForm.value.grade,
        //   yearOfQualification: this.postForm.value.yearOfQualification,

        // }],
        professionalQualifications: this.professionalQualifications.value,
        empAchievements: this.empAchievements.value,

        oldEmployee: [{

          // previous employers details
          companyName: this.postForm.value.companyName,
          companyAddress: this.postForm.value.companyAddress,
          designation: this.postForm.value.designation,
          dateFrom: this.postForm.value.dateFrom,
          dateTo: this.postForm.value.dateTo,
          description: this.postForm.value.description,
          previousManagerName: this.postForm.value.previousManagerName,
          previousManagerPhoneCode: this.postForm.value.previousManagerPhoneCode,
          previousManagerContact: this.postForm.value.previousManagerContact,
          previousHRName: this.postForm.value.previousHRName,
          previousHRPhoneCode: this.postForm.value.previousHRPhoneCode,
          previousHRContact: this.postForm.value.previousHRContact,
          // achievementsRewards: this.postForm.value.achievementsRewards,






          lastWithdrawnSalary: this.postForm.value.lastWithdrawnSalary,

        }],
        training: [{
          // // training details
          trainingType: this.postForm.value.trainingType,
          inHouseOutsource: this.postForm.value.inHouseOutsource,
          paidUnpaid: this.postForm.value.paidUnpaid,
          trainingStartDate: this.postForm.value.trainingStartDate,
          trainingEndDate: this.postForm.value.trainingEndDate,
          // // trainers details
          trainerName: this.postForm.value.trainerName,
          trainerPost: this.postForm.value.trainerPost,
          trainerDepartment: this.postForm.value.trainerDepartment,
          trainerPhoneCode: this.postForm.value.trainerPhoneCode,
          trainerPhoneNo: this.postForm.value.trainerPhoneNo,
          trainerFeedback: this.postForm.value.trainerFeedback,
        }],

        bgcheck: {
          // // background check
          status: this.postForm.value.status,
          doneBy: this.postForm.value.doneBy,
          internalConcernedManager: this.postForm.value.internalConcernedManager,
          externalName: this.postForm.value.externalConcernedPerson,
          externalPost: this.postForm.value.externalPost,
          externalCompanyName: this.postForm.value.externalCompanyName,
          externalPhoneCode: this.postForm.value.externalPhoneCode,
          externalPhoneNo: this.postForm.value.externalPhoneNo,
          managerApproval: this.postForm.value.managerApproval,
          managerName: this.postForm.value.managerName,
          remark: this.postForm.value.remark,
          // document verification
          previousDesignationAndResponsibilityVerified: this.postForm.value.previousDesignationAndResponsibilityVerified,
          idProofDocumentVerified: this.postForm.value.idProofDocumentVerified,
          educationalQualificationVerified: this.postForm.value.educationalQualificationVerified,
          previousEmploymentStatusVerified: this.postForm.value.previousEmploymentStatusVerified,
          addressVerified: this.postForm.value.addressVerified,
          // criminal
          criminalRecords: this.postForm.value.criminalRecords,
          punishmentForImprisonmentApproval: this.postForm.value.punishmentForImprisonmentApproval,
        },
        othersQualifications: this.othersQualifications.value,


        department: {
          departmentId: this.postForm.value.jobdepartment

        },
        jobDetails: [{
          // // jobs details
          // jobPostDesignation: this.postForm.value.jobPostDesignation,


          // jobdepartment: this.postForm.value.jobdepartment,
          companyEmailIdProvided: this.postForm.value.companyEmailIdProvided,
          companyEmailId: this.postForm.value.companyEmailId,
          // jobLevel: this.postForm.value.jobLevel,   mujhe isko kahi aur krna hai `
          postedLocation: this.postForm.value.postedLocation,
          // // PayScale details
          basicPay: this.postForm.value.basicAllowance,
          houseRentAllowance: this.postForm.value.houseRentAllowance,
          houseRentAmount: this.postForm.value.houseRentAmount,
          foodAllowance: this.postForm.value.foodAllowance,
          foodAllowanceAmount: this.postForm.value.foodAllowanceAmount,
          vehicleAllowance: this.postForm.value.vehicleAllowance,
          vehicleAllowanceAmount: this.postForm.value.vehicleAllowanceAmount,
          uniformAllowance: this.postForm.value.uniformAllowance,
          uniformAllowanceAmount: this.postForm.value.uniformAllowanceAmount,
          travellingAllowances: this.postForm.value.travellingAllowances,
          travellingAllowancesAmount: this.postForm.value.travellingAllowancesAmount,
          educationalAllowance: this.postForm.value.educationalAllowance,
          educationalAllowanceAmount: this.postForm.value.educationalAllowanceAmount,
          otherAllowance: this.postForm.value.otherAllowance,
          otherAllowanceAmount: this.postForm.value.otherAllowanceAmount,
          vehicle: this.postForm.value.vehicle,
          vehicleNumber: this.postForm.value.vehicleNumber,
          vehicleModelName: this.postForm.value.vehicleModelName,
          vehicleModelYear: this.postForm.value.vehicleModelYear,
          isVehicleNewOrPreowned: this.postForm.value.isVehicleNewOrPreowned,
          cashOrChipFacility: this.postForm.value.vehicleFuelCashFacility,
          chipNumber: this.postForm.value.vehicleFuelChipFacility,
          cashAmount: this.postForm.value.cashAmount,
          // // accommodation
          accommodationYesOrNo: this.postForm.value.accommodationYesOrNo,
          isShredOrSeparate: this.postForm.value.isShredOrSeparate,
          isExeutiveOrLabourFacility: this.postForm.value.isExeutiveOrLabourFacility,
          electricityAllocationYesOrNo: this.postForm.value.electricityAllocationYesOrNo,
          electricityAllocationAmount: this.postForm.value.electricityAllocationAmount,
          rentAllocationYesOrNo: this.postForm.value.rentAllocationYesOrNo,
          rentAllocationAmount: this.postForm.value.rentAllocationAmount,

          mobileIssuedOrNot: this.postForm.value.mobileIssuedOrNot,
          simIssuedOrNot: this.postForm.value.simIssuedOrNot,
          flightFacilities: this.postForm.value.flightFacilities,
          howMuchTime: this.postForm.value.howMuchTime,
          familyTicketsAlsoProvidedOrNot: this.postForm.value.familyTicketsAlsoProvidedOrNot,
          othersAccomandation: this.postForm.value.othersAccomandation,
          // healthInsuranceCoverage
          healthInsuranceCoverage: this.postForm.value.healthInsuranceCoverage,
          maximumAmountGiven: this.postForm.value.maximumAmountGiven,
          familyHealthInsuranceGivenOrNot: this.postForm.value.familyHealthInsuranceGivenOrNot,
          familyHealthInsuranceType: this.postForm.value.familyHealthInsuranceType,
          joiningDate: this.postForm.value.joiningDate,

          punchingMachineYesOrNo: this.postForm.value.punchingMachineYesOrNo,
          referredBy: this.postForm.value.ReferedBy,
          byWhom: this.postForm.value.ReferenceName,
        }]
      }

      let currentDesignation = {
        levelId: this.levelId,
        startDate: this.postForm.value.joiningDate,
        locationId: [+this.postForm.value.postedLocation],
        designationId: [+this.postForm.value.designationId],
        taskId: []
      }

      const formFileData = new FormData();
      formFileData.append('PersonalInfo', JSON.stringify(formDetail))

      formFileData.append('CurrentDesignationandAdditionalTask', JSON.stringify(currentDesignation))
      // console
      formFileData.append('passportSizePhoto', this.postForm.value.passportSizePhoto);
      formFileData.append("passportScan", this.postForm.value.passportScannedCopy);
      formFileData.append("OtherIdProofDoc", this.postForm.value.otherScannedIdProof);
      formFileData.append("licensecopy", this.postForm.value.scannedCopyOfLincense);
      formFileData.append("raddressproof", this.postForm.value.ScannedCopyOfRealtiveAddress)
      formFileData.append("relativeid", this.postForm.value.ScannedCopyOfRealtiveId)
      formFileData.append("visaDocs", this.postForm.value.VisaScannedCopyOfID)

      formFileData.append("secondaryDocumentScan", this.postForm.value.ScannedCopyOfSecondary)
      formFileData.append("seniorSecondaryDocumentScan", this.postForm.value.ScannedCopyOfSeniorSecondary)
      formFileData.append("graduationDocumentScan", this.postForm.value.ScannedCopyOfGraduation)
      formFileData.append("postGraduationDocumentScan", this.postForm.value.ScannedCopyOfPostGraduation)
      formFileData.append("diplomaDocumentScan", this.postForm.value.ScannedCopyOfDiploma)
      this.array.forEach((element: any) => {
        if (element !== undefined) {
          console.log(element)
          formFileData.append('othersDocumentScan', element)
        }
      })

      //update one
      // this.array.forEach((element: any) => {
      //   if (element !== undefined && element !== null) {
      //     formFileData.append('othersDocumentScan', element);
      //   }
      // });



      // const formFileData_2=new FormData();
      // formFileData.append('scannedCopyOfOther',this.postForm.value.otherQualifications)
      this.professionalArray.forEach((e: any) => {
        if (e !== undefined) {
          formFileData.append('degreeScan', e)
        }
      })
      // formFileData.append("degreeScan", this.postForm.value.ScannedCopyOfCourseCompleted)
      this.achivementArray.forEach((e: any) => {

        if (e !== undefined) {
          formFileData.append('achievementsRewardsDocs', e)

        }
      })
      formFileData.append("achievementsRewardsDocs", this.postForm.value.ScanCopyOfAchivements)
      formFileData.append("payslipScan", this.postForm.value.SalaryScannedCopy)
      formFileData.append("recordsheet", this.postForm.value.RecordSheet)
      formFileData.append("declarationRequired", this.postForm.value.Declaration)
      formFileData.append("CertificateUploadedForOutsource", this.postForm.value.CertificateUploadedForOutsource)
      formFileData.append("PaidTrainingDocumentProof", this.postForm.value.PaidTrainingDocumentProof)
      formFileData.forEach((e) => {
        console.log(e)
      })

      this.apiService.addPost(formFileData).subscribe((successResponse: any) => {
        // console.log(successResponse);
        this.postForm.reset();
        this.router.navigate(['/user-profile']);
        // alert("Successfully Posted OnBoard");

        this.toastr.info("Successfully Posted OnBoard");
      }, (errorResponse: any) => {
        // console.log(errorResponse.error.message)
        // alert(errorResponse.error.message)
        this.toastr.error(errorResponse.error.message);
      })
    } else {
      // alert("field is required")
      this.toastr.error("Field is required");


    }
  }

  public onDesignation(event: any) {
    const id = event.target.value;
    this.levelId = id;
    console.log(id)
    this.apiService.getDesignationByLevelId(id).subscribe((successResponse) => {
      // console.log(successResponse)
      this.designationByLevelId = successResponse
    },
      (errorResponse) => {
        // console.log(errorResponse.error.text)
        // alert(errorResponse.error.text)
        this.toastr.error(errorResponse.error.text);
      })
  }
}


