import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { Country, State, City } from "country-state-city";
import { ServicesService } from "src/app/services/services.service";
import { ActivatedRoute, Router } from "@angular/router";
import jwtDecode from "jwt-decode";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-employee-update-onboard',
  templateUrl: './employee-update-onboard.component.html',
  styleUrls: ['./employee-update-onboard.component.scss']
})


export class EmployeeUpdateOnboardComponent implements OnInit {
  public currentDate!: string;

  public step: any = 1;
  public postForm!: FormGroup;
  public Countries: any[] = [];
  years: number[] = [];

  constructor(
    private toastr: ToastrService,
    private apiService: ServicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private api: ServicesService,
    private route: ActivatedRoute,
  ) {
    this.currentDate = formatDate(new Date(), "yyyy-MM-dd", "en");
  
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
        if (file.type !== 'application/pdf') {
          // alert('Only PDF files are allowed!');
          this.toastr.error('Only PDF files are allowed!')
          
          return;
        }
        // Check if the file size is greater than 2MB
        if (file.size > 2097152) { // 2MB in bytes
           this.toastr.error('Only PDF files are allowed!')
          return;
        }
        this.postForm?.patchValue({
          passportScannedCopy: file
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

  public array: any = [];
  public professionalArray: any = [];
  public achivementArray: any = [];
  //method for selecting and convert it into base64 url   for dynamic files
  onFileSelected(event: any, index: any) {
    switch (event.target.name) {
      case "ScannedCopyOfOther":
        // var fileObject;;
        console.log(event.target.files);
        const file = event.target.files[0];
        this.array[index] = file;
        console.log(this.array);
        // const control = this.postForm.value.othersQualifications.at(index);
        // control.ScannedCopyOfOther = file;
        //   fileObject = {
        //     'lastModified'     : file.lastModified,
        //     'lastModifiedDate' : file.lastModifiedDate,
        //     'name'             : file.name,
        //     'size'             : file.size,
        //     'type'             : file.type
        //  };
        // then use JSON.stringify on File object
        // this.fileToBase64(file, function (base64String: any) {
        //   const serializedFile = btoa(base64String);
        //   control.ScannedCopyOfOther = serializedFile;
        // });
        break;
      case "ScannedCopyOfCourseCompleted":
        console.log(event.target.files);
        const proffile = event.target.files[0];
        this.professionalArray[index] = proffile;
        console.log(this.professionalArray);

        break;

      case "ScanCopyOfAchivements":
        console.log(event.target.files);
        const achivefile = event.target.files[0];
        this.achivementArray[index] = achivefile;
        console.log(this.achivementArray);
        break;
    }
  }
  ngOnInit() {

    const currentDesignationAndTask = localStorage.getItem('currentDesignationAndTask');
    console.log(currentDesignationAndTask)


    const currentYear = new Date().getFullYear();
    for (let i = 1970; i <= currentYear; i++) {
      this.years.push(i);
    }
    this.initPostForm();
    
   

  const token = this.apiService.getToken();

 
  if (token) {
    const decodedToken: any = jwtDecode(token);
    const userId = decodedToken.sub; 
    console.log(userId) // Assuming 'id' is the property in the decoded token
    this.apiService.personalInfo(userId).subscribe((success:any)=>{
      console.log(success)
     
      
          this.obj = success;
          console.log(this.obj?.department?.departmentName)
          this.initPostForm();
          this.Countries = Country.getAllCountries();
        
    })
  } else {
    console.error('Token not found.');
  }
}
  public employeeAge: number = 0;
  public getAge(event: any) {
    let enterDob: string = event.target.value;
    let dob_date = enterDob.split("-");
    let current_date = new Date();
    let current_year = current_date.getFullYear();
    let current_month = current_date.getMonth() + 1;
    let current_day = current_date.getDate();

    let age = current_year - parseInt(dob_date[0]) - 1;
    if (
      parseInt(dob_date[1]) <= current_month &&
      parseInt(dob_date[2]) <= current_day
    ) {
      age += 1;
    }
    this.employeeAge = age;
  }
  // <input type="date" name="dateOfBirth" (input)="getAge($event)">

  // To automatically calculate the age based on the date of birth, bind the getAge function to the input event of the date of birth field in your template. For example:
  public onSelect(event: any) {
    switch (event.target.name) {
      case "workedInUAE":
        if (this.postForm.controls["workedInUAE"].value === "No") {
          this.postForm.get("EmiratesID")?.disable();
        } else {
          this.postForm.get("EmiratesID")?.enable();
        }
        break;
      case "VisaType":
        if (this.postForm.controls["VisaType"].value === "Visit Visa") {
          this.postForm.get("workVisaEmirateId")?.disable();
        } else {
          this.postForm.get("workVisaEmirateId")?.enable();
        }
        break;
      case "categoryOfVisa":
        if (
          this.postForm.controls["categoryOfVisa"].value === "Own Work Visa"
        ) {
          this.postForm.get("siGlobalWorkVisaCompany")?.disable();
        } else {
          this.postForm.get("siGlobalWorkVisaCompany")?.enable();
        }
        break;
      case "managerApproval":
        if (
          this.postForm.controls["managerApproval"].value === "Not Approved"
        ) {
          this.postForm.get("managerName")?.disable();
        } else {
          this.postForm.get("managerName")?.enable();
        }
        break;
      case "criminalRecords":
        if (this.postForm.controls["criminalRecords"].value === "No") {
          this.postForm.get("RecordSheet")?.disable();
        } else {
          this.postForm.get("RecordSheet")?.enable();
        }
        break;

      case "punishmentForImprisonmentApproval":
        if (
          this.postForm.controls["punishmentForImprisonmentApproval"].value ===
          "No"
        ) {
          this.postForm.get("approvalsheet")?.disable();
        } else {
          this.postForm.get("approvalsheet")?.enable();
        }
        break;
      case "EmailIdProvided":
        if (this.postForm.controls["EmailIdProvided"].value === "No") {
          this.postForm.get("CompanyEmployeeId")?.disable();
        } else {
          this.postForm.get("CompanyEmployeeId")?.enable();
        }
        break;

      case "familyHealthInsuranceGivenOrNot":
        if (
          this.postForm.controls["familyHealthInsuranceGivenOrNot"].value ===
          "No"
        ) {
          this.postForm.get("familyHealthInsuranceType")?.disable();
        } else {
          this.postForm.get("familyHealthInsuranceType")?.enable();
        }
        break;

      case "drivinglicense":
        if (this.postForm.controls["drivinglicense"].value === "No") {
          this.postForm.get("scannedCopyOfLincense")?.disable();
        } else {
          this.postForm.get("scannedCopyOfLincense")?.enable();
        }
        break;
      case "inHouseOutsource":
        if (this.postForm.controls["inHouseOutsource"].value === "InHouse") {
          this.postForm.get("CertificateUploadedForOutsource")?.disable();
        } else {
          this.postForm.get("CertificateUploadedForOutsource")?.enable();
        }
        break;
      case "paidUnpaid":
        if (this.postForm.controls["paidUnpaid"].value === "Unpaid") {
          this.postForm.get("PaidTrainingDocumentProof")?.disable();
        } else {
          this.postForm.get("PaidTrainingDocumentProof")?.enable();
        }
        break;
    }
  }

  ngAfterViewInit() {
  
  }

  //method for getting post form controls
  get getPostFormControls() {
    return this.postForm.controls;
  }

  
public obj:any



  //method for initializing the form
  public initPostForm() {
    this.postForm = this.formBuilder.group({
      filledForm:[true],
      
      namePrefix: this.obj?.namePrefix,
      firstName: this.obj?.firstName,
      middleName: this.obj?.middleName,
      lastName: this.obj?.lastName,
      fathersFirstName: this.obj?.fathersFirstName,
      fathersMiddleName: this.obj?.fathersMiddleName,
      fatherLastName: this.obj?.fathersLastName,
      dateOfBirth: this.obj?.dateOfBirth,
      age: this.obj?.age,
      maritalStatus: this.obj?.maritalStatus,
      phoneCode: this.obj?.phoneCode,
      personalContactNo: this.obj?.personalContactNo,
      passportSizePhoto: [this.obj?.passportSizePhotoData],
      email: this.obj?.email,
      citizenship: this.obj?.citizenship,
      passportIssuingCountry: this.obj?.psDetail?.passportIssuingCountry,
      passportNumber: this.obj?.psDetail?.passportNumber,
      passportScannedCopy: [this.obj?.psDetail?.passportScan],
      passportExpiryDate: this.obj?.psDetail?.passportExpiryDate,
      otherScannedIdProof: [this.obj?.otherIdProofDoc],
      bloodGroup: this.obj?.bloodGroup,
      permanentResidenceCountry: this.obj?.permanentResidenceCountry,
      permanentResidentialAddress: this.obj?.permanentResidentialAddress,
      hobbies: this.obj?.hobbies,
      drivinglicense: this.obj?.license?.drivinglicense,
      licenseType: this.obj?.license?.licenseType,
      scannedCopyOfLincense: [this.obj?.license?.licensecopy],
      ownvehicle: this.obj?.license?.ownvehicle,
      // bloodRealtive Starts here
      relativenamePrefix: this.obj?.relative?.relativenamePrefix,
      RFirstname: this.obj?.relative?.rfirstname,
      Rmiddlename: this.obj?.relative?.rmiddlename,
      Rlastname: this.obj?.relative?.rlastname,
      relationship: this.obj?.relative?.relationship,
      RphoneCode: [''],
      Rcontactno: this.obj?.relative?.rcontactno,
      Raddress: this.obj?.relative?.raddress,
      ScannedCopyOfRealtiveAddress: [this.obj?.relative?.raddressproof],
      ScannedCopyOfRealtiveId: [this.obj?.relative?.relativeid],
      // Visa Details Start Here
      workedInUAE: this.obj?.workedInUAE,
      EmiratesID: this.obj?.emiratesID,
      VisaType: this.obj?.visainfo.visaType,
      workVisaEmirateId: this.obj?.visainfo?.workVisaEmirateId,
      categoryOfVisa: this.obj?.visainfo?.categoryOfVisa,
      siGlobalWorkVisaCompany: this.obj?.visainfo?.siGlobalWorkVisaCompany,
      visaIssueyDate: this.obj?.visainfo?.visaIssueyDate,
      visaExpiryDate: this.obj?.visainfo?.visaExpiryDate,
      VisaScannedCopyOfID: [this.obj?.visainfo.visaDocs],
      DegreeAttestation: this.obj?.degreeAttestation,
      // education Qualification

      // secondary details
      secondaryIssuingAuthority:
        this.obj?.educations[0]?.secondaryIssuingAuthority,
      secondarymarksOrGrade: this.obj?.educations[0]?.secondarymarksOrGrade,
      secondaryyear: this.obj?.educations[0]?.secondaryyear,
      ScannedCopyOfSecondary: [this.obj?.educations[0]?.secondaryDocumentScan],
      // senior secondary details
      seniorSecondaryIssuingAuthority:
        this.obj?.educations[0]?.seniorSecondaryIssuingAuthority,
      seniorSecondaryMarksOrGrade:
        this.obj?.educations[0]?.seniorSecondaryMarksOrGrade,
      seniorSecondaryYear: this.obj?.educations[0]?.seniorSecondaryYear,
      ScannedCopyOfSeniorSecondary: [
        this.obj?.educations[0]?.seniorSecondaryDocumentScan,
      ],
      // graduation details
      graduationIssuingAuthority:
        this.obj?.educations[0]?.graduationIssuingAuthority,
      graduationMarksOrGrade: this.obj?.educations[0]?.graduationMarksOrGrade,
      graduationYear: this.obj?.educations[0]?.graduationYear,
      ScannedCopyOfGraduation: [this.obj?.educations[0]?.graduationDocumentScan],
      // post graduation details
      postGraduationIssuingAuthority:
        this.obj?.educations[0]?.postGraduationIssuingAuthority,
      postGraduationMarksOrGrade:
        this.obj?.educations[0]?.postGraduationMarksOrGrade,
      postGraduationYear: this.obj?.educations[0]?.postGraduationYear,
      ScannedCopyOfPostGraduation: [
        this.obj?.educations[0]?.postGraduationDocumentScan,
      ],

      diplomaIssuingAuthority: this.obj?.educations[0]?.diplomaIssuingAuthority,
      diplomaMarksOrGrade: this.obj?.educations[0]?.diplomaMarksOrGrade,
      diplomaYear: this.obj?.educations[0]?.diplomaYear,
      ScannedCopyOfDiploma: [this.obj?.educations[0]?.diplomaDocumentScan],

      othersQualifications: this.formBuilder.array([]),
      // others:'',
      // othersIssuingAuthority:'',
      // othersMarksOrGrade:'',
      // othersYear:'',
      // ScannedCopyOfOther:[''],

      // Professional education

      professionalQualifications: this.formBuilder.array([]),

      // previous employer
      companyName: this.obj?.oldEmployee[0]?.companyName,
      companyAddress: this.obj?.oldEmployee[0]?.companyAddress,
      designation: this.obj?.oldEmployee[0]?.designation,
      description: this.obj?.oldEmployee[0]?.description,
      dateFrom: this.obj?.oldEmployee[0]?.dateFrom,
      dateTo: this.obj?.oldEmployee[0]?.dateTo,

      previousManagerName: this.obj?.oldEmployee[0]?.previousManagerName,
      previousManagerPhoneCode:
        this.obj?.oldEmployee[0]?.previousManagerPhoneCode,
      previousManagerContact: this.obj?.oldEmployee[0]?.previousManagerContact,
      previousHRName: this.obj?.oldEmployee[0]?.previousHRName,
      previousHRPhoneCode: this.obj?.oldEmployee[0]?.previousHRPhoneCode,
      previousHRContact: this.obj?.oldEmployee[0]?.previousHRContact,

      // achievementsRewards: '',
      // ScanCopyOfAchivements: this.formBuilder.array([]),
      empAchievements: this.formBuilder.array([]),
      lastWithdrawnSalary: this.obj?.oldEmployee[0]?.lastWithdrawnSalary,
      SalaryScannedCopy: [this.obj?.oldEmployee[0]?.payslipScan],

      // background Check
      status: this.obj?.bgcheck?.status,
      doneBy: this.obj?.bgcheck?.doneBy,
      internalConcernedManager: this.obj?.bgcheck?.internalConcernedManager,
      externalConcernedPerson: this.obj?.bgcheck?.externalName,
      externalPost: this.obj?.bgcheck?.externalPost,
      externalCompanyName: this.obj?.bgcheck?.externalCompanyName,
      externalPhoneCode: this.obj?.bgcheck?.externalPhoneCode,
      externalPhoneNo: this.obj?.bgcheck?.externalPhoneNo,
      managerApproval: this.obj?.bgcheck?.managerApproval,
      managerName: this.obj?.bgcheck?.managerName,
      remark: this.obj?.bgcheck?.remark,
      // document verification
      addressVerified: this.obj?.bgcheck?.addressVerified,
      previousEmploymentStatusVerified:
        this.obj?.bgcheck?.previousEmploymentStatusVerified,
      previousDesignationAndResponsibilityVerified:
        this.obj?.bgcheck?.previousDesignationAndResponsibilityVerified,
      idProofDocumentVerified: this.obj?.bgcheck?.idProofDocumentVerified,
      educationalQualificationVerified:
        this.obj?.bgcheck?.educationalQualificationVerified,
      // Criminal Record
      criminalRecords: this.obj?.bgcheck?.criminalRecords,
      RecordSheet: [this.obj?.bgcheck?.recordsheet],
      punishmentForImprisonmentApproval:
        this.obj?.bgcheck?.punishmentForImprisonmentApproval,
      approvalsheet: this.obj?.bgcheck?.criminalRecords,
      Declaration: [this.obj?.bgcheck?.declarationRequired],

      // Training Details
      trainingType: this.obj?.training[0]?.trainingType,
      inHouseOutsource: this.obj?.training[0]?.inHouseOutsource,
      paidUnpaid: this.obj?.training[0]?.paidUnpaid,
      CertificateUploadedForOutsource: [
        this.obj?.training[0]?.certificateUploadedForOutsource,
      ],
      PaidTrainingDocumentProof: [
        this.obj?.training[0]?.paidTrainingDocumentProof,
      ],
      trainingStartDate: this.obj?.training[0]?.trainingStartDate,
      trainingEndDate: this.obj?.training[0]?.trainingEndDate,
      trainerName: this.obj?.training[0]?.trainerName,
      trainerPost: this.obj?.training[0]?.trainerPost,
      trainerDepartment: this.obj?.training[0]?.trainerDepartment,
      trainerPhoneCode: this.obj?.training[0]?.trainerPhoneCode,
      trainerPhoneNo: this.obj?.training[0]?.trainerPhoneNoString,
      trainerFeedback: this.obj?.training[0]?.trainerFeedback,

      // jobs Details

      // jobPostDesignation: this.obj?.jobDetails[0]?.jobPostDesignation,
      jobdepartment: this.obj?.department?.departmentName,
      companyEmailIdProvided: this.obj?.jobDetails[0]?.companyEmailIdProvided,
      companyEmailId: this.obj?.jobDetails[0]?.companyEmailId,
      // jobLevel: this.obj?.jobDetails[0]?.jobLevel,
      postedLocation: this.obj?.jobDetails[0]?.postedLocation,
      // payscale
      basicAllowance: this.obj?.jobDetails[0]?.basicAllowance,
      houseRentAllowance: this.obj?.jobDetails[0]?.houseRentAllowance,
      houseRentAmount: this.obj?.jobDetails[0]?.houseRentAmount,
      foodAllowance: this.obj?.jobDetails[0]?.foodAllowance,
      foodAllowanceAmount: this.obj?.jobDetails[0]?.foodAllowanceAmount,
      vehicleAllowance: this.obj?.jobDetails[0]?.vehicleAllowance,
      vehicleAllowanceAmount: this.obj?.jobDetails[0]?.vehicleAllowanceAmount,
      uniformAllowance: this.obj?.jobDetails[0]?.uniformAllowance,
      uniformAllowanceAmount: this.obj?.jobDetails[0]?.uniformAllowanceAmount,
      travellingAllowances: this.obj?.jobDetails[0]?.travellingAllowances,
      travellingAllowancesAmount:
        this.obj?.jobDetails[0]?.travellingAllowancesAmount,
      educationalAllowance: this.obj?.jobDetails[0]?.educationalAllowance,
      educationalAllowanceAmount:
        this.obj?.jobDetails[0]?.educationalAllowanceAmount,
      otherAllowance: this.obj?.jobDetails[0]?.otherAllowance,
      otherAllowanceAmount: this.obj?.jobDetails[0]?.otherAllowanceAmount,
      vehicle: this.obj?.jobDetails[0]?.vehicle,
      vehicleNumber: this.obj?.jobDetails[0]?.vehicleNumber,
      vehicleModelName: this.obj?.jobDetails[0]?.vehicleModelName,
      vehicleModelYear: this.obj?.jobDetails[0]?.vehicleModelYear,
      isVehicleNewOrPreowned: this.obj?.jobDetails[0]?.isVehicleNewOrPreowned,
      vehicleFuelCashFacility: this.obj?.jobDetails[0]?.cashOrChipFacility,
      vehicleFuelChipFacility: this.obj?.jobDetails[0]?.chipNumber,

      accommodationYesOrNo: this.obj?.jobDetails[0]?.accommodationYesOrNo,
      isShredOrSeparate: this.obj?.jobDetails[0]?.isShredOrSeparate,
      isExeutiveOrLabourFacility:
        this.obj?.jobDetails[0]?.isExeutiveOrLabourFacility,
      electricityAllocationYesOrNo:
        this.obj?.jobDetails[0]?.electricityAllocationYesOrNo,
      electricityAllocationAmount:
        this.obj?.jobDetails[0]?.electricityAllocationAmount,
      rentAllocationYesOrNo: this.obj?.jobDetails[0]?.rentAllocationYesOrNo,
      rentAllocationAmount: this.obj?.jobDetails[0]?.rentAllocationAmount,
      mobileIssuedOrNot: this.obj?.jobDetails[0]?.mobileIssuedOrNot,
      simIssuedOrNot: this.obj?.jobDetails[0]?.simIssuedOrNot,
      flightFacilities: this.obj?.jobDetails[0]?.flightFacilities,
      howMuchTime: this.obj?.jobDetails[0]?.howMuchTime,
      familyTicketsAlsoProvidedOrNot:
        this.obj?.jobDetails[0]?.familyTicketsAlsoProvidedOrNot,
      othersAccomandation: this.obj?.jobDetails[0]?.othersAccomandation,

      healthInsuranceCoverage: this.obj?.jobDetails[0]?.healthInsuranceCoverage,
      maximumAmountGiven: this.obj?.jobDetails[0]?.maximumAmountGiven,
      familyHealthInsuranceGivenOrNot:
        this.obj?.jobDetails[0]?.familyHealthInsuranceGivenOrNot,
      familyHealthInsuranceType:
        this.obj?.jobDetails[0]?.familyHealthInsuranceType,
      joiningDate: this.obj?.jobDetails[0]?.joiningDate,
      punchingMachineYesOrNo: this.obj?.jobDetails[0]?.punchingMachineYesOrNo,
      ReferedBy: this.obj?.jobDetails[0]?.referredBy,
      ReferenceName: this.obj?.jobDetails[0]?.byWhom,
    });
  }

  get empAchievements() {
    return this.postForm.get("empAchievements") as FormArray;
  }

  addempAchievementsField() {
    const achievementsRewardsfieldGroup = this.formBuilder.group({
      achievementRewardsName: "",
      // ScannedCopyOfOther: [],
    });
    this.empAchievements.push(achievementsRewardsfieldGroup);
  }

  removeempAchievementsField(index: number) {
    this.empAchievements.removeAt(index);
  }

  // Getter for easy access to the dynamicFields FormArray for other qualification
  get othersQualifications() {
    return this.postForm.get("othersQualifications") as FormArray;
  }

  // Add a new field group to the dynamicFields FormArray other qualification
  addField() {
    const fieldGroup = this.formBuilder.group({
      others: "",
      othersIssuingAuthority: "",
      othersMarksOrGrade: "",
      othersYear: "",
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
    return this.postForm.get("professionalQualifications") as FormArray;
  }

  // Add a new field group to the dynamicFields FormArray other qualification
  addprofessionalQualificationsField() {
    const fieldGroupForPro = this.formBuilder.group({
      qualification: "",
      issuingAuthority: "",
      gradingSystem: "Grading System",
      grade: "",
      yearOfQualification: "",
      // ScannedCopyOfCourseCompleted: [''],
    });
    this.professionalQualifications.push(fieldGroupForPro);
  }

  // Remove a field group from the dynamicFields FormArray other qualification
  removeprofessionalQualificationsField(index: number) {
    this.professionalQualifications.removeAt(index);
  }

  public next() {
    this.step = this.step + 1;
    console.log(this.step);
    
  }
  public previous() {
    this.step = this.step - 1;
  }

  //method for submitting the form value
  public onSubmit() {
    // this.step=this.step + 1;
    console.log(this.postForm.value);

    if (this.postForm.valid) {
      let formDetail = {
        onboardHrApprovalStatus:"pending",
        filledForm:this.postForm.value.filledForm,

        employeeId:this.obj.employeeId,

        namePrefix: this.postForm.value.namePrefix,
        firstName: this.postForm.value.firstName,
        middleName: this.postForm.value.middleName,
        lastName: this.postForm.value.lastName,
        fathersFirstName: this.postForm.value.fathersFirstName,
        fathersMiddleName: this.postForm.value.fathersMiddleName,
        fathersLastName: this.postForm.value.fatherLastName,
        dateOfBirth: this.postForm.value.dateOfBirth,
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
        permanentResidenceCountry:
          this.postForm.value.permanentResidenceCountry,
        permanentResidentialAddress:
          this.postForm.value.permanentResidentialAddress,
        hobbies: this.postForm.value.hobbies,

        educations: [
          {
            // secondary details
            secondaryIssuingAuthority:
              this.postForm.value.secondaryIssuingAuthority,
            secondarymarksOrGrade: this.postForm.value.secondarymarksOrGrade,
            secondaryyear: this.postForm.value.secondaryyear,

            // senior secondary details
            seniorSecondaryIssuingAuthority:
              this.postForm.value.seniorSecondaryIssuingAuthority,
            seniorSecondaryMarksOrGrade:
              this.postForm.value.seniorSecondaryMarksOrGrade,
            seniorSecondaryYear: this.postForm.value.seniorSecondaryYear,

            // graduation details
            graduationIssuingAuthority:
              this.postForm.value.graduationIssuingAuthority,
            graduationMarksOrGrade: this.postForm.value.graduationMarksOrGrade,
            graduationYear: this.postForm.value.graduationYear,

            // post graduation details
            postGraduationIssuingAuthority:
              this.postForm.value.postGraduationIssuingAuthority,
            postGraduationMarksOrGrade:
              this.postForm.value.postGraduationMarksOrGrade,
            postGraduationYear: this.postForm.value.postGraduationYear,

            // diploma details
            diplomaIssuingAuthority:
              this.postForm.value.diplomaIssuingAuthority,
            diplomaMarksOrGrade: this.postForm.value.diplomaMarksOrGrade,
            diplomaYear: this.postForm.value.diplomaYear,
          },
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
          visaIssueyDate: this.postForm.value.visaIssueyDate,
          visaExpiryDate: this.postForm.value.visaExpiryDate,
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
        oldEmployee: [
          {
            // previous employers details
            // previousId:this.obj?.oldEmployee[0].previousId,
            companyName: this.postForm.value.companyName,
            companyAddress: this.postForm.value.companyAddress,
            designation: this.postForm.value.designation,
            dateFrom: this.postForm.value.dateFrom,
            dateTo: this.postForm.value.dateTo,
            description: this.postForm.value.description,
            previousManagerName: this.postForm.value.previousManagerName,
            previousManagerPhoneCode:
              this.postForm.value.previousManagerPhoneCode,
            previousManagerContact: this.postForm.value.previousManagerContact,
            previousHRName: this.postForm.value.previousHRName,
            previousHRPhoneCode: this.postForm.value.previousHRPhoneCode,
            previousHRContact: this.postForm.value.previousHRContact,
            // achievementsRewards: this.postForm.value.achievementsRewards,

            // empAchievements: this.empAchievements.value,

            lastWithdrawnSalary: this.postForm.value.lastWithdrawnSalary,
          },
        ],
        training: [
          {
            id:this.obj?.training[0].id,
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
          },
        ],

        bgcheck: {
          // // background check
          status: this.postForm.value.status,
          doneBy: this.postForm.value.doneBy,
          internalConcernedManager:
            this.postForm.value.internalConcernedManager,
          externalName: this.postForm.value.externalConcernedPerson,
          externalPost: this.postForm.value.externalPost,
          externalCompanyName: this.postForm.value.externalCompanyName,
          externalPhoneCode: this.postForm.value.externalPhoneCode,
          externalPhoneNo: this.postForm.value.externalPhoneNo,
          managerApproval: this.postForm.value.managerApproval,
          managerName: this.postForm.value.managerName,
          remark: this.postForm.value.remark,
          // document verification
          previousDesignationAndResponsibilityVerified:
            this.postForm.value.previousDesignationAndResponsibilityVerified,
          idProofDocumentVerified: this.postForm.value.idProofDocumentVerified,
          educationalQualificationVerified:
            this.postForm.value.educationalQualificationVerified,
          previousEmploymentStatusVerified:
            this.postForm.value.previousEmploymentStatusVerified,
          addressVerified: this.postForm.value.addressVerified,
          // criminal
          criminalRecords: this.postForm.value.criminalRecords,
          punishmentForImprisonmentApproval:
            this.postForm.value.punishmentForImprisonmentApproval,
        },
        othersQualifications: this.othersQualifications.value,
        department:{
          // jobdepartment: this.obj.department.departmentName,
          // departmentName:this.postForm.value.jobdepartment,
          departmentId:this.obj.department.departmentId
  
  
  
        },

        jobDetails: [
          {

            // // jobs details
            id:this.obj?.jobDetails[0].id,
            // jobPostDesignation: this.postForm.value.jobPostDesignation,
            // jobdepartment: this.postForm.value.jobdepartment,
            companyEmailIdProvided: this.postForm.value.companyEmailIdProvided,
            companyEmailId: this.postForm.value.companyEmailId,
            // jobLevel: this.postForm.value.jobLevel,
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
            travellingAllowancesAmount:
              this.postForm.value.travellingAllowancesAmount,
            educationalAllowance: this.postForm.value.educationalAllowance,
            educationalAllowanceAmount:
              this.postForm.value.educationalAllowanceAmount,
            otherAllowance: this.postForm.value.otherAllowance,
            otherAllowanceAmount: this.postForm.value.otherAllowanceAmount,
            vehicle: this.postForm.value.vehicle,
            vehicleNumber: this.postForm.value.vehicleNumber,
            vehicleModelName: this.postForm.value.vehicleModelName,
            vehicleModelYear: this.postForm.value.vehicleModelYear,
            isVehicleNewOrPreowned: this.postForm.value.isVehicleNewOrPreowned,
            cashOrChipFacility: this.postForm.value.vehicleFuelCashFacility,
            chipNumber: this.postForm.value.vehicleFuelChipFacility,
            // // accommodation
            accommodationYesOrNo: this.postForm.value.accommodationYesOrNo,
            isShredOrSeparate: this.postForm.value.isShredOrSeparate,
            isExeutiveOrLabourFacility:
              this.postForm.value.isExeutiveOrLabourFacility,
            electricityAllocationYesOrNo:
              this.postForm.value.electricityAllocationYesOrNo,
            electricityAllocationAmount:
              this.postForm.value.electricityAllocationAmount,
            rentAllocationYesOrNo: this.postForm.value.rentAllocationYesOrNo,
            rentAllocationAmount: this.postForm.value.rentAllocationAmount,

            mobileIssuedOrNot: this.postForm.value.mobileIssuedOrNot,
            simIssuedOrNot: this.postForm.value.simIssuedOrNot,
            flightFacilities: this.postForm.value.flightFacilities,
            howMuchTime: this.postForm.value.howMuchTime,
            familyTicketsAlsoProvidedOrNot:
              this.postForm.value.familyTicketsAlsoProvidedOrNot,
            othersAccomandation: this.postForm.value.othersAccomandation,
            // healthInsuranceCoverage
            healthInsuranceCoverage:
              this.postForm.value.healthInsuranceCoverage,
            maximumAmountGiven: this.postForm.value.maximumAmountGiven,
            familyHealthInsuranceGivenOrNot:
              this.postForm.value.familyHealthInsuranceGivenOrNot,
            familyHealthInsuranceType:
              this.postForm.value.familyHealthInsuranceType,
            joiningDate: this.postForm.value.joiningDate,

            punchingMachineYesOrNo: this.postForm.value.punchingMachineYesOrNo,
            referredBy: this.postForm.value.ReferedBy,
            byWhom: this.postForm.value.ReferenceName,
          },
        ],
      };
      const formFileData = new FormData();
      formFileData.append("PersonalInfo", JSON.stringify(formDetail));
      // formFileData.append("education", JSON.stringify(educations))
      // formFileData.append("bgcheck", JSON.stringify(bgcheck))
      // formFileData.append("visainfo", JSON.stringify(visainfo))
      // formFileData.append("relative", JSON.stringify(relative))
      // formFileData.append("license", JSON.stringify(license))
      // formFileData.append("training", JSON.stringify(training))
      // formFileData.append("oldEmployee", JSON.stringify(oldEmployee))
      // formFileData.append("professionalQualifications", JSON.stringify(professionalQualifications));
      // formFileData.append("formDetail", JSON.stringify(formDetail));
      formFileData.append(
        "passportSizePhoto",
        this.postForm.value.passportSizePhoto
      );
      formFileData.append(
        "passportScan",
        this.postForm.value.passportScannedCopy
      );
      formFileData.append(
        "OtherIdProofDoc",
        this.postForm.value.otherScannedIdProof
      );
      formFileData.append(
        "licensecopy",
        this.postForm.value.scannedCopyOfLincense
      );
      formFileData.append(
        "raddressproof",
        this.postForm.value.ScannedCopyOfRealtiveAddress
      );
      formFileData.append(
        "relativeid",
        this.postForm.value.ScannedCopyOfRealtiveId
      );
      formFileData.append("visaDocs", this.postForm.value.VisaScannedCopyOfID);

      formFileData.append(
        "secondaryDocumentScan",
        this.postForm.value.ScannedCopyOfSecondary
      );
      formFileData.append(
        "seniorSecondaryDocumentScan",
        this.postForm.value.ScannedCopyOfSeniorSecondary
      );
      formFileData.append(
        "graduationDocumentScan",
        this.postForm.value.ScannedCopyOfGraduation
      );
      formFileData.append(
        "postGraduationDocumentScan",
        this.postForm.value.ScannedCopyOfPostGraduation
      );
      formFileData.append(
        "diplomaDocumentScan",
        this.postForm.value.ScannedCopyOfDiploma
      );
      this.array.forEach((element: any) => {
        if (element !== undefined) {
          formFileData.append("othersDocumentScan", element);
        }
      });

      // const formFileData_2=new FormData();
      // formFileData.append('scannedCopyOfOther',this.postForm.value.otherQualifications)
      this.professionalArray.forEach((e: any) => {
        if (e !== undefined) {
          formFileData.append("degreeScan", e);
        }
      });
      // formFileData.append("degreeScan", this.postForm.value.ScannedCopyOfCourseCompleted)
      this.achivementArray.forEach((e: any) => {
        if (e !== undefined) {
          formFileData.append("achievementsRewardsDocs", e);
        }
      });
      formFileData.append(
        "achievementsRewardsDocs",
        this.postForm.value.ScanCopyOfAchivements
      );
      formFileData.append("payslipScan", this.postForm.value.SalaryScannedCopy);
      formFileData.append("recordsheet", this.postForm.value.RecordSheet);
      formFileData.append(
        "declarationRequired",
        this.postForm.value.Declaration
      );
      formFileData.append(
        "CertificateUploadedForOutsource",
        this.postForm.value.CertificateUploadedForOutsource
      );
      formFileData.append(
        "PaidTrainingDocumentProof",
        this.postForm.value.PaidTrainingDocumentProof
      );
      this.apiService.updatePost(formFileData,this.postForm.value.email).subscribe(
        (successResponse: any) => {
          this.router.navigate(['/waiting-for-hr-approval']);
        // alert("successfully ")
        // this.postForm.reset();
        // this.router.navigate(['/user-profile']);
        // alert("Successfully Posted OnBoard");

        this.toastr.info('Details updated successfully');;

             
      }, (errorResponse: any) => {
        console.log(errorResponse.error.message)
        // alert(errorResponse.error.message)
        this.toastr.error(errorResponse.error.message);
      }
      );
    }
  }
}