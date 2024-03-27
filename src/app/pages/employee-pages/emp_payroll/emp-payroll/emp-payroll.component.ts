import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-emp-payroll',
  templateUrl: './emp-payroll.component.html',
  styleUrls: ['./emp-payroll.component.scss']
})
export class EmpPayrollComponent implements OnInit {
  selectedMonthForSalaryCertificate: string;
  public selectedTab: string = 'personalDetails';
  selectMonth:string=""
  sendMonth:string=''
  sendyear:string=''
  userId:any
  constructor( private services:ServicesService) { }
  public month: any = new Date().getMonth() + 1;
  public year: number = new Date().getFullYear();


  
  
  ngOnInit(): void {
    console.log(this.month)
    console.log(this.year)
    const token = this.services.getToken();
    // console.log(token)
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.userId = decodedToken.sub; 
      console.log(this.userId) // Assuming 'id' is the property in the decoded token
      this.services.payrollDetailsEmployee(this.userId,this.year,this.month).subscribe((success)=>{
        console.log(success)
        // this.object=success
      })
    } else {
      console.error('Token not found.');
    }
  }


  public obj:any={
    "payroll": {
        "payrollId": 0,
        "employeeId": 146620,
        "name": "Zohaib khan ",
        "jobDesignation": "job",
        "jobLevel": "job",
        "jobLocation": "job",
        "department": "Quality Control",
        "contact": "1234567890",
        "address": "123 Main Street, City, State, Country",
        "month": 12,
        "year": 2023,
        "basicPay": 10.0,
        "allowances": {
            "houseRentAmount": "10",
            "foodAllowanceAmount": "10",
            "vehicleAllowanceAmount": "10",
            "uniformAllowanceAmount": "10",
            "travellingAllowancesAmount": "10",
            "educationalAllowanceAmount": "10",
            "otherAllowanceAmount": "10"
        },
        "vehicleCashAmount": 10.0,
        "electricityAllocationAmount": 10.0,
        "rentAllocationAmount": 10.0,
        "incentivesName": null,
        "incentiveAmount": 0.0,
        "anySpecialReward": null,
        "anySpecialRewardAmount": 0.0,
        "bonus": 0.0,
        "overtimePayAmount": 8.0,
        "overtimePay": 0.0,
        "monthlyPerformancePay": 0.0,
        "totalPay": 110.0,
        "methodUsedForPayment": "Cash",
        "dateOfPayment": "2023-12-28",
        "deductions": {
            "leaveDayCut": 0.0,
            "tardyDayCut": 0.0,
            "halfDayCut": 0.0,
            "otherDeductionsName": null,
            "otherDeductions": 0.0,
            "anyOtherSpecificDeduction": 0.0,
            "totalDeductions": 0.0
        },
        "tax": []
    },
    "attendence": {
        "totalWorkigDaysInMonth": 9,
        "totalDaysPresentInMonth": 0,
        "totalHalfDaysInMonth": 0,
        "totalOvertimeHoursInMonth": 54674,
        "noOfDaysWorkedRegularHours": 0,
        "totalTardyDays": 0,
        "shift": null,
        "attendence": []
    },
    "totalleaves": null
}
//search for payroll by month
serach(){
  console.log(this.selectMonth)
  const parts = this.selectMonth.split('-');
  this.sendMonth=parts[0]
  this.sendyear=parts[1]
console.log(this.sendMonth,this.sendyear,this.userId)
this.services.payrollDetailsEmployee(this.userId,this.sendyear,this.sendMonth).subscribe((success)=>{
  console.log(success)
  // this.object=success
})

}

// apply for certificate
applyForCertificate(){
  console.log(this.selectedMonthForSalaryCertificate)
  const parts = this.selectedMonthForSalaryCertificate.split('-');
  this.sendMonth=parts[0]
  this.sendyear=parts[1]

  console.log(this.sendMonth,this.sendyear,this.userId)

  
}

}
