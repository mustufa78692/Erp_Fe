import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { ServicesService } from 'src/app/services/services.service';
import * as moment from 'moment';
import 'moment-timezone';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-time-attendance',
  templateUrl: './time-attendance.component.html',
  styleUrls: ['./time-attendance.component.scss']
})
export class TimeAttendanceComponent implements OnInit {
  activeTab:string = 'rg'
  punchInTimeIST: moment.Moment;
  currentLocalTime: moment.Moment;
  timeDifference: number;
  yearsData: number[] = [];

  selectedYear: string; 
  selectedMonth: string;
  onSearch() {
    console.log('Selected Year:', this.selectedYear);
    console.log('Selected Month:', this.selectedMonth);
    console.log('Selected Id:', this.userId);
    this.services.getAttedanceByMonth(this.userId,this.selectedYear,this.selectedMonth).subscribe((success)=>{
      console.log(success)
      this.serachByMonthObj=success
    })
    // Add your search logic here
  }
public userId:any;
  constructor(private services : ServicesService,private formBuilder:FormBuilder) {
    this.populateYears()
    //convert the stamp to loacl time 
    // const punchInTimeUtc = moment('2023-10-18T04:32:07.743+00:00');
    // const punchInTimeIST = punchInTimeUtc.tz('Asia/Kolkata');
    // this.punchInTimeIST = punchInTimeIST.format('HH:mm:ss');
    // console.log(this.punchInTimeIST)

    //convert the local time and difference the current time and the time stamp converted time
    const punchInTimeUtc = moment('2023-10-17T03:38:26.095+00:00');
    this.punchInTimeIST = punchInTimeUtc.tz('Asia/Kolkata');

    this.currentLocalTime = moment();

    this.timeDifference = this.currentLocalTime.diff(this.punchInTimeIST, 'milliseconds');
    console.log(this.timeDifference)
  
  }

  populateYears() {
    const currentYear = new Date().getFullYear();
    for (let i:any = 1990; i <= currentYear; i++) {
      this.yearsData.push(i);
    }
  }

  ngOnInit(): void {
    
    const token = this.services.getToken();
    const decodedToken: any = jwtDecode(token);
      this.userId = decodedToken.sub; 

      this.initCheckedPunchIn()

      this.initSearchByDate()
      console.log(this.attandance_response_data)


      // console.log(this.userId) // Assuming 'id' is the property in the decoded token
    // this.services.timeAttendance().subscribe( (result : any) => {
    //   console.log(result);
    // })
    // this.calculateDifference()
    
  }
  initCheckedPunchIn(){
    this.punchInTime = new Date();
    console.log('Punched in at:', this.punchInTime);
    const year = this.punchInTime.getFullYear();
    const month = (this.punchInTime.getMonth() + 1).toString().padStart(2, '0'); // January is 0
    const day = this.punchInTime.getDate().toString().padStart(2, '0');
    console.log()
    this.puncInDate=`${year}-${month}-${day}`
    console.log(this.puncInDate)
    
    this.services.checkedpunch(this.puncInDate,+this.userId).subscribe((sucess)=>{
      console.log(sucess)
      this.checkedPunchIn=sucess
      if(this.checkedPunchIn===false){
        this.punchType="In"
      }else{
        this.punchType="Out"
      }

    },(err)=>{
      console.log(err)
    })
    
    
  }

  public months : string[] = [ 'Month',
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ]
  public years : string[] = [ 'Year',
    '2019','2020','2021','2022','2023'
  ]

  
  
  public findDate(dayType){
    let currDate : Date = new Date()
    let resultDate : String;

    switch(dayType){
      case 'yesterday':
        resultDate = currDate.getFullYear() + '-0' + (currDate.getMonth() + 1) + '-' + (currDate.getDate() - 1);
        return resultDate
      
      case 'today':
        resultDate = currDate.getDate() + ' ' + this.months[currDate.getMonth() + 1] + ' ' + currDate.getFullYear();
        return resultDate

    }
  }
  public puncInDate:any;
  public punchType : any;
  public checkedPunchIn:any

  public getPunchInTime:any
  public getPunchOutTime:any
  public workTime_hours : number = 0
  public workTime_minutes : number = 0
  public workTime_seconds : number = 0
  public workTime : string = "00:00 hrs"
  public punchInTime: Date | null = null;
  public diffMinutes:any = "00 ";
  public diffSeconds:any = "00";
  public diffHours:any = "00";
  public Total_Working_Hours:any;
  public attandance_response_data:any
//   ={
//     "attendenceId": 3,
//     "date": "2023-10-18",
//     "day": "WEDNESDAY",
//     "punchInTime": "2023-10-20T08:17:37.828+00:00",
//     "punchOutTime": null,
//     "workingHours": 0,
//     "halfDay": false,
//     "overTime": 0,
//     "employeeId": 2,
//     "breaks": null
// }



  // public employeeId:any
  // public puchIn(): void {
  //   console.log("dfknkdfan")
  //   if( this.checkedPunchIn=== false){
  //     if(this.punchType=='In'){
  //       this.punchInTime = new Date();
  //     console.log('Punched in at:', this.punchInTime);
  //     const year = this.punchInTime.getFullYear();
  //     const month = (this.punchInTime.getMonth() + 1).toString().padStart(2, '0'); // January is 0
  //     const day = this.punchInTime.getDate().toString().padStart(2, '0');
  //     console.log()
  //     this.puncInDate=`${year}-${month}-${day}`
  //     console.log(this.puncInDate)
  //     let formData:any={
  //       date:this.puncInDate, 
  //       employeeId:+this.userId
  
  //     }
  //     this.services.punchIn(formData).subscribe((data:any)=>{
  
  
        
  //       console.log("successully post data")
  //       console.log(data)
  //       this.attandance_response_data=data.statusAttendence
  //       console.log(this.attandance_response_data)
  //      // Change punch type to 'Out' after successful punch in
  //      this.punchType = "Out";
  //      // Update checkedPunchIn to prevent further punch ins
  //      this.checkedPunchIn = this.attandance_response_data;
  //     })
  
  //     }
      

  //   }
  //   else{
  //     let datasend:any={id:this.attandance_response_data.attendenceId

  //     }
  //         this.services.punchOut(datasend).subscribe((data:any)=>{
  //           console.log(data)

  //           this.attandance_response_data=data.statusAttendence
  //       console.log(this.attandance_response_data)
  //           // Reset punch type to In after punching out
  //           this.punchType = "In";
  //           // Reset checkedPunchIn for the next day
  //           this.checkedPunchIn = this.attandance_response_data;
  //         })


  //   }
    
    

  // }


  formatDuration(milliseconds: number): string {
    if (!milliseconds) return '00 00 00';

    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  }


  puchIn(){
    if(this.checkedPunchIn===false){
      if(this.punchType == 'In') {
                this.punchInTime = new Date();
                console.log('Punched in at:', this.punchInTime);
                const year = this.punchInTime.getFullYear();
                const month = (this.punchInTime.getMonth() + 1).toString().padStart(2, '0');
                const day = this.punchInTime.getDate().toString().padStart(2, '0');
                this.puncInDate = `${year}-${month}-${day}`;
                console.log(this.puncInDate);
        
                let formData = {
                  date: this.puncInDate, 
                  employeeId: +this.userId
                };
        
                this.services.punchIn(formData).subscribe((data:any) => {
                  console.log("Successfully punched in");
                  console.log(data);
                  this.attandance_response_data = data;
                  console.log(this.attandance_response_data)



                   // Store attendenceId in local storage
                localStorage.setItem('attendenceId', JSON.stringify(data));
                  this.punchType = "Out"; // Change the button to 'Punch Out'
                });
              }
// else{
//   console.log("kakf")
//   this.punchType="In"
// }
    }else{

      // Retrieve the attendenceId from local storage
// let storedAttendenceId = localStorage.getItem('attendenceId');

      // console.log(storedAttendenceId)
      // Retrieve and parse the attendenceId from local storage
let storedData = localStorage.getItem('attendenceId');
if (storedData) {
    this.attandance_response_data = JSON.parse(storedData);
    // console.log("Retrieved attendance data:", this.attandance_response_data);
} else {
    console.log("No attendance data found in local storage.");
}


      // console.log(this?.attandance_response_data?.attendenceId);
      
      let datasend = {
                  id: this?.attandance_response_data?.attendenceId
                };
                console.log(datasend)
      this.services.punchOut(datasend).subscribe((data:any)=>{
        console.log(data.punchInTime)
        console.log(data.punchOutTime)
        this.getPunchOutTime=data.punchOutTime;
        this.Total_Working_Hours=data.workingHours
        console.log(this.Total_Working_Hours)
        this.punchType="In"

      },(err)=>{
        console.log(err)
      })
      
    }
    
  }

  

  public breakStart(){
let datasend:any={id:this.attandance_response_data.attendenceId

}
    this.services.breakStart(datasend).subscribe((data)=>{
      console.log(data)
    })
    // console.log("click me ")
    // this.service.breakStart().subscribe((data)=>{

    // })
  }
  breakEnd(){
    let datasend:any={id:this.attandance_response_data.attendenceId

    }
        this.services.breakEnd(datasend).subscribe((data)=>{
          console.log(data)
        })

  }
  calculateDifference(): void {
    if (this.attandance_response_data.punchInTime) {
      const currentTime = new Date(); // Get the current time
      const punchInTime = new Date(this.attandance_response_data.punchInTime);

      // Calculate the time difference in milliseconds
      const timeDifferenceMs = currentTime.getTime() - punchInTime.getTime();

      // You can convert the time difference to other units like seconds, minutes, hours, etc.
      const timeDifferenceSeconds = timeDifferenceMs / 1000;
      const timeDifferenceMinutes = timeDifferenceMs / (1000 * 60);
      const timeDifferenceHours = timeDifferenceMs / (1000 * 60 * 60);

      console.log('Time Difference (ms):', timeDifferenceMs);
      console.log('Time Difference (seconds):', timeDifferenceSeconds);
      console.log('Time Difference (minutes):', timeDifferenceMinutes);
      console.log('Time Difference (hours):', timeDifferenceHours);
    }
  }


  public SearchByDate:FormGroup;


  SearchByDateObj:any




  serachByMonthObj:any={
    "totalWorkigDaysInMonth": null,
    "totalDaysPresentInMonth": null,
    "totalHalfDaysInMonth": null,
    "totalOvertimeHoursInMonth": null,
    "shift": null,
    "attendence": [
        
        {
            "attendenceId": null,
            "date": null,
            "day": null,
            "punchInTime": null,
            "punchOutTime": null,
            "workingHours": null,
            "halfDay": null,
            "overTime": null,
            "overtimeStatus": null,
            "employeeId": null,
            "breaks": []
        }
    ]
}
//   =[
//     {
//         "attendenceId": 1,
//         "date": "2023-11-20",
//         "day": "MONDAY",
//         "punchInTime": "2023-11-22T14:23:52.867+00:00",
//         "punchOutTime": "2023-11-22T14:24:13.580+00:00",
//         "workingHours": 20713,
//         "halfDay": true,
//         "overTime": 0,
//         "overtimeStatus": null,
//         "employeeId": 115435,
//         "breaks": []
//     },
//     {
//         "attendenceId": 2,
//         "date": "2023-11-21",
//         "day": "TUESDAY",
//         "punchInTime": "2023-11-22T14:24:40.549+00:00",
//         "punchOutTime": "2023-11-22T14:25:08.253+00:00",
//         "workingHours": 27703,
//         "halfDay": true,
//         "overTime": 0,
//         "overtimeStatus": null,
//         "employeeId": 115435,
//         "breaks": []
//     },
//     {
//         "attendenceId": 3,
//         "date": "2023-11-19",
//         "day": "SUNDAY",
//         "punchInTime": "2023-11-22T14:24:57.463+00:00",
//         "punchOutTime": null,
//         "workingHours": 0,
//         "halfDay": false,
//         "overTime": 0,
//         "overtimeStatus": null,
//         "employeeId": 115435,
//         "breaks": []
//     }
// ]
  public initSearchByDate(){
    this.SearchByDate=this.formBuilder.group({
      startDate:[''],
      endDate:[''],
      id:[this.userId ]

    })

  }
  onSubmit(){
    console.log(this.SearchByDate.value)
    let requestStartDate=this.SearchByDate.value.startDate
    let requestEndDate=this.SearchByDate.value.endDate
    let requestId=this.SearchByDate.value.id

    this.services.getAttendanceByDate(requestStartDate,requestEndDate,requestId).subscribe((succ:any)=>{

this.SearchByDateObj=succ 
     console.log(succ)
    },(err)=>{
      console.log(err)
    })

  }


  }

