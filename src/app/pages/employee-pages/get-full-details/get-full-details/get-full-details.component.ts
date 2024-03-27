import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-get-full-details',
  templateUrl: './get-full-details.component.html',
  styleUrls: ['./get-full-details.component.scss']
})
export class GetFullDetailsComponent implements OnInit {

  
  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private api: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];

    this.api.searchEmployeeById(id).subscribe((res) => {
      this.obj = res;
      console.log(this.obj)
      this.isAlterOpen();
    });
  }

  // data


public obj:any={
  "employeeId": 116247,
  "namePrefix": "mr",
  "firstName": "Mohammad ",
  "middleName": "Rahil",
  "lastName": "khan",
  "fathersFirstName": "Mr Michael",
  "fathersMiddleName": "William",
  "fathersLastName": "Doe",
  "dateOfBirth": "01-01-2000",
  "age": 23,
  "maritalStatus": "Single",
  "phoneCode": "+91",
  "personalContactNo": "1234567890",
  "passportSizePhoto": null,
  "passportSizePhotoData": null,
  "email": "employee6@gmail.com",
  "citizenship": "USA",
  "otherIdProofDocData": null,
  "permanentResidenceCountry": "USA",
  "permanentResidentialAddress": "123 Main Street, City, State, Country",
  "bloodGroup": "A+",
  "workedInUAE": "yes",
  "hobbies": "Reading, Traveling",
  "status": "Active",
  "empStatus": "New employee",
  "verifyAndNotVerify": null,
  "psDetail": {
      "passportIssuingCountry": "USA 1",
      "passportNumber": "1234567891",
      "passportExpiryDate": "10-07-2021",
      "passportScan": null,
      "passportScanData": null
  },
  "license": {
      "drivinglicense": "false",
      "licenseType": "Bike",
      "ownvehicle": "true",
      "licensecopy": null,
      "licenseCopyData": null
  },
  "relative": {
      "relativenamePrefix": "Mr",
      "relationship": "Sibling",
      "relativeid": null,
      "relativeIdData": null,
      "raddressProofData": null,
      "raddressproof": null,
      "rfirstname": "Jane",
      "rlastname": "Smith",
      "rcontactno": "9876543210",
      "raddress": "456 Oak Street, City, State, Country",
      "rmiddlename": "Doe",
      "rphoneCode": "+91"
  },
  "visainfo": {
      "workVisaEmirateId": "0987600000",
      "categoryOfVisa": "visa",
      "siGlobalWorkVisaCompany": "ACME Corp",
      "visaIssueyDate": "20-01-2010",
      "visaExpiryDate": "2023-07-19",
      "visaEmailSend20and60daysBefore": false,
      "visaEmailSend4daysBefore": false,
      "visaEmailSend3daysBefore": false,
      "visaEmailSend2daysBefore": false,
      "visaEmailSend1dayBefore": false,
      "visaDocs": null,
      "visaDocsData": null,
      "visaType": "Visit visa",
      "visaEmailSend10and30daysBefore": false
  },
  "educations": [
      {
          "id": 8,
          "secondaryIssuingAuthority": "10",
          "secondarymarksOrGrade": "90",
          "secondaryyear": "2010",
          "secondaryDocumentScan": null,
          "secondaryDocumentScanData": null,
          "seniorSecondaryIssuingAuthority": "Bhopal 2",
          "seniorSecondaryMarksOrGrade": "80",
          "seniorSecondaryYear": "2011",
          "seniorSecondaryDocumentScan": null,
          "seniorSecondaryDocumentScanData": null,
          "graduationIssuingAuthority": "bhopal 3",
          "graduationMarksOrGrade": "70",
          "graduationYear": "2012",
          "graduationDocumentScan": null,
          "graduationDocumentScanData": null,
          "postGraduationIssuingAuthority": "Bhopal ",
          "postGraduationMarksOrGrade": "60",
          "postGraduationYear": "2013",
          "postGraduationDocumentScan": null,
          "postGraduationDocumentScanData": null,
          "diplomaIssuingAuthority": "diplomaIssuingAuthority",
          "diplomaMarksOrGrade": "diplomaMarksOrGrade",
          "diplomaYear": "diplomaYear",
          "diplomaDocumentScan": null,
          "diplomaDocumentScanData": null
      }
  ],
  "othersQualifications": [
      {
          "id": 15,
          "others": "other",
          "othersIssuingAuthority": "bhopal ",
          "othersMarksOrGrade": "5",
          "othersYear": "2010",
          "othersDocumentScan": null,
          "othersDocumentScanData": null
      },
      {
          "id": 16,
          "others": "new other",
          "othersIssuingAuthority": "bhopal 5",
          "othersMarksOrGrade": "50",
          "othersYear": "2014",
          "othersDocumentScan": null,
          "othersDocumentScanData": null
      }
  ],
  "professionalQualifications": [
      {
          "id": 15,
          "qualification": "MBA ",
          "issuingAuthority": "bhopal ",
          "gradingSystem": "dddd ",
          "yearOfQualification": "2010 ",
          "grade": "B+",
          "degreeScan": null,
          "degreeScanData": null
      },
      {
          "id": 16,
          "qualification": "MBA 2",
          "issuingAuthority": "bhopal 2",
          "gradingSystem": "dddd 2",
          "yearOfQualification": "2010 2",
          "grade": "B+ 2",
          "degreeScan": null,
          "degreeScanData": null
      }
  ],
  "oldEmployee": [
      {
          "previousId": 8,
          "companyName": "aibs",
          "companyAddress": "bhopal",
          "designation": "aaa",
          "description": "DDD",
          "dateFrom": "20-02-2016",
          "dateTo": "20-02-2030",
          "previousManagerName": "SSSSS",
          "previousManagerPhoneCode": "91",
          "previousManagerContact": "09876543",
          "previousHRName": "ali",
          "previousHRPhoneCode": "91",
          "previousHRContact": "dddd",
          "lastWithdrawnSalary": 900001.0,
          "payslipScan": null,
          "payslipScanData": null,
          "empAchievements": [
              {
                  "id": 15,
                  "achievementRewardsName": "Best of employee of the year",
                  "achievementsRewardsDocs": null,
                  "achievementsRewardsDocsData": null
              },
              {
                  "id": 16,
                  "achievementRewardsName": "Best of employee of the month",
                  "achievementsRewardsDocs": null,
                  "achievementsRewardsDocsData": null
              }
          ]
      }
  ],
  "bgcheck": {
      "id": 8,
      "status": "india ",
      "doneBy": "done",
      "internalConcernedManager": "llll",
      "externalName": "externalName",
      "externalPost": "externalPost",
      "externalCompanyName": "externalCompanyName",
      "externalPhoneCode": "externalPhoneCode",
      "externalPhoneNo": "externalPhoneNo",
      "managerApproval": "pppp",
      "managerName": "rahil",
      "remark": "good",
      "addressVerified": "oooo",
      "previousEmploymentStatusVerified": "eeeee",
      "previousDesignationAndResponsibilityVerified": "uuuuuuu",
      "idProofDocumentVerified": "Verified",
      "educationalQualificationVerified": "errrrrrr",
      "criminalRecords": "tttt",
      "punishmentForImprisonmentApproval": "Approval",
      "recordsheet": null,
      "recordSheetData": null,
      "declarationRequired": null,
      "declarationRequiredData": null
  },
  "training": [
      {
          "id": 8,
          "trainingType": "lll",
          "inHouseOutsource": "aaaa",
          "paidUnpaid": "hhh",
          "trainingStartDate": "32223",
          "trainingEndDate": "wwww",
          "trainerFeedback": "jjjj",
          "trainerName": "trainerName",
          "trainerPost": "trainerPost",
          "trainerDepartment": "trainerDepartment",
          "trainerPhoneCode": "trainerPhoneCode",
          "trainerPhoneNo": "trainerPhoneNoString",
          "paidTrainingDocumentProofData": null,
          "paidTrainingDocumentProof": null,
          "certificateUploadedForOutsource": null,
          "certificateUploadedForOutsourceData": null
      }
  ],
  "jobDetails": [
      {
          "id": 8,
          "jobPostDesignation": "job",
          "companyEmailIdProvided": "job",
          "companyEmailId": "job",
          "jobLevel": "job",
          "postedLocation": "job",
          "basicPay": "10000",
          "houseRentAllowance": "job",
          "houseRentAmount": "job",
          "foodAllowance": "job",
          "foodAllowanceAmount": "job",
          "vehicleAllowance": "job",
          "vehicleAllowanceAmount": "job",
          "uniformAllowance": "job",
          "uniformAllowanceAmount": "job",
          "travellingAllowances": "job",
          "travellingAllowancesAmount": "job",
          "educationalAllowance": "job",
          "educationalAllowanceAmount": "job",
          "otherAllowance": "job",
          "otherAllowanceAmount": "job",
          "vehicle": "job",
          "vehicleNumber": "job",
          "vehicleModelName": "job",
          "vehicleModelYear": "job",
          "isVehicleNewOrPreowned": "job",
          "cashOrChipFacility": "yes",
          "chipNumber": "0987654987",
          "accommodationYesOrNo": "job",
          "isShredOrSeparate": "job",
          "isExeutiveOrLabourFacility": "job",
          "electricityAllocationYesOrNo": "job",
          "electricityAllocationAmount": "job",
          "rentAllocationYesOrNo": "job",
          "rentAllocationAmount": "job",
          "mobileIssuedOrNot": "job",
          "simIssuedOrNot": "job",
          "flightFacilities": "job",
          "howMuchTime": "job",
          "familyTicketsAlsoProvidedOrNot": "job",
          "othersAccomandation": "job",
          "healthInsuranceCoverage": "job",
          "maximumAmountGiven": "job",
          "familyHealthInsuranceGivenOrNot": "job",
          "familyHealthInsuranceType": "type",
          "punchingMachineYesOrNo": "job",
          "joiningDate": "job",
          "referredBy": "yes",
          "byWhom": "mustufa khan"
      }
  ],
  "department": {
      "departmentId": 11,
      "departmentName": "Procurement"
  },
  "userentity": {
      "id": 8,
      "username": "116247",
      "email": "employee6@gmail.com",
      "password": null,
      "activationToken": "86173bdb-5b6b-48dc-8610-c4f7b660d646",
      "roles": [
          {
              "id": 2,
              "name": "ROLE_EMPLOYEE"
          }
      ],
      "enabled": false
  },
  "id": 1008,
  "otherIdProofDoc": null,
  "emiratesID": "1234567890",
  "degreeAttestation": "yes"
}



  

  public readAFile() {
    const file = new FileReader();
  }
  public imagePreview: any;
  public activeBtn: string = "pf";
  public isReadOnly: boolean = true;

  public getImage(blobs: string) {
    let objectURL = "data:image/jpeg;base64," + blobs;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  public getPDF(blob: string): SafeUrl {
    const blobUrl = `data:application/pdf;base64,${blob}`;
    return this.sanitizer.bypassSecurityTrustUrl(blobUrl);
  }

  public isAlertBox: any;
  public isAlterOpen() {
    console.log(this.obj.bgcheck.status);
    if (this.obj.bgcheck.status === "done") {
      this.isAlertBox = true;
    }
  }

  public setReadOnly() {
    this.isReadOnly = false;
  }

  public navigate(email: string) {
    console.log("jhjakhkjhak")
    // this.router.navigate([`/update-employee/${email}`]);
  }



}
