import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ServicesService {
  public url = environment.hostUrlNgrock; // main url
  public role: string;
  public designationId:any;
  public expiry_time:any;


  public projectName:string="Swift Biz";

  constructor(private http: HttpClient, private router: Router) {}

  // ================== AUTH_PAGES SERVICES ==================

  // FOR REGISTER
  // public register(data: any) {
  //   data = {
  //     ...data,
  //     role: ["employee"],
  //   };
  //   console.log(data);
  //   return this.http.post(
  //     environment.hostUrlNgrock + "/api/auth/v1/signup",
  //     data
  //   );
  // }

  // FOR LOGIN
  public login(data: any) {
    // console.log(data);
    // return this.http.post(environment.hostUrlNgrock + "/signin", data);
    return this.http.post(
      environment.hostUrlNgrock +"/api/auth/v1/signin",
      data
   );
  }
  // FOR LOGOUT
  public logOut() {
    sessionStorage.clear();

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("designationId");
    localStorage.removeItem("expieryTime");
    localStorage.removeItem("currentDesignationAndTask");
   this.router.navigate(["/login"]);
  }


  public getDynamicRoutes(data: any){
    return this.http.get(this.url +data)
  }


  //for verify  the user through otp 
public verify_employee_otp(data:any){
  return this.http.post(
    `${environment.hostUrlNgrock}/api/auth/activate`,data

  )
}

public save_password(data:any){
  return this.http.post(
    `${environment.hostUrlNgrock}/api/auth/save-password`,data
  )
}


  // ------------- FORGOT PASSWORD 3 STEP PROCESS SERVICES ------------------


  // FOR FORGOT PASSWORD
  public forgot_password(data: any) {
    // return this.http.post(this.url + "send-otp", data);
    return this.http.post(environment.hostUrlNgrock + "/api/auth/send-otp", data);
  }

  // FOR OTP VERIFICATION
  public otp_verification(data: any) {
    return this.http.post(
      environment.hostUrlNgrock + "/api/auth/verifyotp",
      data
    );
  }

  // FOR CHANGE PASSWORD
  public new_pass_set(data: any) {
    return this.http.put(
      environment.hostUrlNgrock + "/api/auth/new-password",
      data
    );
  }

  // ---------- TOKEN AND ROLE SET AND GET SERVICES --------------------

  // CHECK TOKEN IN LOCALSTORAGE (set or not)
  public tokenChecker() {
    return !!localStorage.getItem("token"); // return true or false
  }

  // GET TOKEN IF SET
  public getToken() {
    let token = localStorage.getItem("token");
    return localStorage.getItem("token");
  }

  // GET ROLE OF USER
  public getRole() {
    if (!!localStorage.getItem("role")) {
      return localStorage.getItem("role");
    }
    return this.role;
  }

  // SET ROLE OF USER
  public setRole(role: string) {
    this.role = role;
    console.log(this.role)
    localStorage.setItem("role", role);
  }


  public getExpiryTime(){

    if (!!localStorage.getItem("expieryTime")) {
      // console.log(expiry)
      this.expiry_time=localStorage.getItem("expieryTime")
      // console.log(this.expiry_time)
      return localStorage.getItem("expieryTime");
    }
   
    return localStorage.getItem("expieryTime")
  }

  


  public get_designationId(){
    if (!!localStorage.getItem("designationId")) {
      return localStorage.getItem("designationId");
    }
    

  }

  public get_currentDesignationAndTask(){
    if (!!localStorage.getItem("currentDesignationAndTask")) {
      return localStorage.getItem("currentDesignationAndTask");
    }
  }


public get_dynamic_sidebar(id:any){
  return this.http.get(this.url+`/designation/${id}/duties`);
  // return this.http.get(this.url+"/getDutiesByDesignationId/"+id);
}






//method for getting leave calender 

public get_leave_calender(){
  const headers = new HttpHeaders({
    'ngrok-skip-browser-warning': '69420'
    });
  return this.http.get(this.url+"/api/v1/leave-calendar",{headers})

}


//method for eployee leave monitor calender 
public get_staff_leave_moniter(){
  const headers = new HttpHeaders({
    'ngrok-skip-browser-warning': '69420'
    });
  return this.http.get(this.url+"/api/v1/marked-calendar-dates",{headers})

}




//get designation by level id 
public getDesignationByLevelId(id:any){
  const headers = new HttpHeaders({
    'ngrok-skip-browser-warning': '69420'
    });
  return this.http.get(this.url+"/api/v1/designation/level/"+id,{headers})

}

//get designation destId
public getDesignationByDestignationId(id:any){
  const headers = new HttpHeaders({
    'ngrok-skip-browser-warning': '69420'
    });
  return this.http.get(this.url+"/api/v1/designation/"+id,{headers})

}


//method for adding job levels 
public addJobLevel(data:any){
  console.log(data)
  const baseurl=this.url+`/api/v1/job-level?levelName=${data}`
  return this.http.post(baseurl,null)

}


//METHOD FOR ADDING ADDITIONAL TASK 

public add_additional_task(data:any){
  return this.http.post(this.url+"/api/v1/designation-task",data,{ responseType: 'text' })
}

//get All employee of task how assign  by taskId
 
public getEmployeeByTaskId(id:any){
  const headers = new HttpHeaders({
    'ngrok-skip-browser-warning': '69420'
    });
  return this.http.get( environment.hostUrlNgrock+"/api/v1/employees/by-task/"+id,{headers})
}


//update mena end the additional task 

public endTheAdditionalTask(data:any){
  return this.http.put( environment.hostUrlNgrock+`/api/v1/end-task`,data)
}






  // ----------------------------------------------------------
  // ================== ADMIN_PAGES SERVICES ==================

  // not implemented
  public dashboard() {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    // console.log("dashboard services");
    // return this.http.get(environment.hostUrl + "dashboard");
    return this.http.get(environment.hostUrlNgrock + "/api/v1/dashboard",{headers}
    //  {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }
    );
  }

  //getting all departnment
  
  public getDepart(){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get( environment.hostUrlNgrock+"/api/v1/departments",{headers})
  }

  //get department by departmentId
  public getDepartByDepartmentId(id:any){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get( environment.hostUrlNgrock+"/api/v1/departments/"+id,{headers})
  }

  

// add department
public addDepartment(data:any){
  console.log(data)
  return this.http.post(environment.hostUrlNgrock+`/api/v1/departments`,data)
}

  //update the department


  public upadteDepartment(id:any,data:any){
    console.log(id,data)
    return this.http.put(environment.hostUrlNgrock+`/api/v1/departments/${id}`,data)
  }

  //  holidays

  // Add Holidays
  addHolidays(data:any){
    return this.http.post(environment.hostUrlNgrock+ "/api/v1/holidays",data)
  }
  // get All Holidays 
  public getAllHolidays(){
    return this.http.get(environment.hostUrlNgrock+"/api/v1/holidays")
  }

  // get Holiday By year and Country
  public getAllHolidaysByYearCountry(year:string, country:string){
    return this.http.get(environment.hostUrlNgrock+`/api/v1/holidays/year/${year}/country/${country}`)
  }
  
  
  
  



  public getAllHolidaysbycountrywithyear(){

  }

  // ONBOARDING NEW EMPOYEE
  public addPost(formData: any) {
    console.log(formData)
    // return this.http.post(this.url + "/personal-info", formData);
    return this.http.post(
      environment.hostUrlNgrock + "/api/v1/personal-info",
      formData
    );
  }
  // ONBOARDING Updating NEW EMPOYEE
  public updatePost(formData: any,email:string) {
    return this.http.put(
      environment.hostUrlNgrock + `/api/v1/personal-infos/update/email/${email}`,
      formData
    );
  }

  //update designation


  updateDesignationLevel(data: any) {
    // Create HttpHeaders
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put(environment.hostUrlNgrock + `/api/v1/update-designation`, data, { headers });
  }


  //get additional task  by emp id 
  public getAdditionalTaskByemp_id(ID: any) {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get(
      `${environment.hostUrlNgrock}/api/v1/active-designation-task/${ID}`,{headers}
    );
  }

//update leave approver 

public update_leave_approver(id:any,data:any){
  return this.http.put(`${environment.hostUrlNgrock}/api/v1/leave-approvers/${id}`,data)
}

  // ONBOARDING GET ALL EMPLOYEES
  public getAllEmployees() {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get(
      environment.hostUrlNgrock + "/api/v1/personal-infos",{headers}
    );



  }


  //get All Active Employeee
  public getAllActiveEmployee() {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get(
      environment.hostUrlNgrock + "/api/v1/personal-infos/active",{headers}
    );



  }


  
  // ONBOARDING GET EMPLOYEE BY EMAIL
  public searchEmployeeByEmail(email: any) {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get(
      `${environment.hostUrlNgrock}/api/v1/personal-infos/email/${email}`,{headers}
    );
  }
  // ONBOARDING GET EMPLOYEE BY ID
  public searchEmployeeById(ID: any) {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get(
      `${environment.hostUrlNgrock}/api/v1/personal-infos/employeeId/${ID}`,{headers}
    );
  }

  //get All Location
  public getAllLocation() {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get(
      `${environment.hostUrlNgrock}/api/v1/find/all/locations`,{headers}
    );
  } 

  // get location by location Id
  public getLocationByLocationById(id:any) {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get(
      `${environment.hostUrlNgrock}/api/v1/location/id/${id}`,{headers}
    );
  }

  //update location

  public updateLocation(id:any,data:any){
    return this.http.put(`${environment.hostUrlNgrock}/api/v1/location/update/${id}`,data)

  }
  


  //Add Approver 

  public add_approver(data:any){
    return this.http.post(`${environment.hostUrlNgrock}/api/v1/leave-approvers`,data,{ responseType: 'text' })
  }


  //add shift 
  public addShift(data:any){
    return this.http.post(`${environment.hostUrlNgrock}/api/v1/shift`,data)
  }



//method for getting all shift 

public getAllShift(){
  const headers = new HttpHeaders({
    'ngrok-skip-browser-warning': '69420'
    });
  return this.http.get( environment.hostUrlNgrock+"/api/v1/shift",{headers})
}


//method for shift assign 
public assignShift(data:any){
  return this.http.post(environment.hostUrlNgrock+"/api/v1/shift/asign",data)
}
// method to fetch all the employe shift
// GET -api/v1/shift/assign

public getAllemployeeShift(){
  return this.http.get(environment.hostUrlNgrock+"/api/v1/shift/asign")
}


//method for getting shift by assignment id 
// api/v1/shift/asign/{assignmentId}
public getShiftByAssignmentId(assignmentId:number){
  return this.http.get(`${environment.hostUrlNgrock}/api/v1/shift/asign/assignmentId/${assignmentId}`)
}

//method for update the assign shift 
// api/v1/shift/assign

public updatetheshiftassign(data:any){
  return this.http.put(`${environment.hostUrlNgrock}/api/v1/shift/asign`,data)
}




  // ONBOARDING DELETE EMPLOYEE
  public deleteEmployee(email: string, FormData) {
    return this.http.put(
      `${environment.hostUrlNgrock}/api/v1/personal-infos/delete/${email}`,
      FormData
    );
  }



  //add leave type
  public addLeaveType(formData: any) {
    console.log(formData)
    // return this.http.post(this.url + "/personal-info", formData);
    return this.http.post(
      environment.hostUrlNgrock + "/api/v1/leave/types",
      formData
    );
  }



  //ADD LOCATION 


  public add_location(data:any){
    return this.http.post(environment.hostUrlNgrock + "/api/v1/location", data)

  }
  


// GET all job levels 


public get_all__job_levels(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420'
    })
  };
  return this.http.get(environment.hostUrlNgrock + "/api/v1/job-level",httpOptions)
}

//method for get all hioliday
public get_all_holidays(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420'
    })
  };
  return this.http.get(environment.hostUrlNgrock + "/api/v1/holidays",httpOptions)
}


// method for getting particular  employee with leave  reason 
public get_employee_with_leaveReason(empId:number,year:number,month:number,country:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420'
    })
  };
  return this.http.get(environment.hostUrlNgrock + `/api/v1/total/leaves/in-month/${empId}/${year}/${month}/${country}`,httpOptions)
}
// method for getting particular  employee with leave  reason 
public get_employee_with_leaveDetails_year(empId:number,year:number,country:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420'
    })
  };
  return this.http.get(environment.hostUrlNgrock + `/api/v1/total/leaves/in-year/${empId}/${year}/${country}`,httpOptions)
}
//get all employees leave details by date 
public get_employees_with_leaveDetails_by_date(date:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420'
    })
  };
  return this.http.get(environment.hostUrlNgrock + `/api/v1/leave-by-date/${date}`,httpOptions)
}
public get_all_designation(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420'
    })
  };
  return this.http.get(environment.hostUrlNgrock + "/api/v1/designation",httpOptions)
}



public add_duties(data:any){
  return this.http.post(environment.hostUrlNgrock + "/api/v1/duties",data)

}

public get_all_duties(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420'
    })
  };
  return this.http.get(environment.hostUrlNgrock + "/api/v1/duties",httpOptions)
}


//add sub duties


public add_sub_duties(data:any){
  return this.http.post(environment.hostUrlNgrock +"/api/v1/sub-duties",data)
}


public get_all_sub_duties(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420'
    })
  };
  return this.http.get(environment.hostUrlNgrock + "/api/v1/sub-duties",httpOptions)
}
public get_all_task(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420'
    })
  };
  return this.http.get(environment.hostUrlNgrock + "/api/v1/task",httpOptions)
}

public add_task(data:any){
  return this.http.post(environment.hostUrlNgrock +"/api/v1/task",data)
}





  // ONBOARDING EMPLOYEE REJOIN //! not meant to be implemented
  // public rejoinEmployee(email: string) {
  //   return this.http.put(
  //     `${environment.hostUrlNgrock}/api/v1/personal-info/rejoin/${email}`,
  //     {}
  //   );
  // }

  // ----------------------------------------------------------
  // ================== Attendance SERVICES ==================

  // FOR TIME AND ATTENDANCE (not implemeenvironment./ FOR TIME AND ATTENDANCE (not implemented)
  
  public checkedpunch(data1:any,data2:any){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get(
      `${environment.hostUrlNgrock}/api/v1/attendance/${data2}/${data1}`,{headers}
    );
  }
  
  public punchIn(data:any) {
    // let empId = 1001;
    // punch-In-Time
    return this.http.post(`${this.url}/api/v1/attendance/punch-in`,data);
  }

  public punchOut(data:any) {
   
    return this.http.post(`${this.url}/api/v1/attendence/punch-out`,data);
  }
  public breakStart(data:any) {
    // let empId = 1001;
    // punch-In-Time
    return this.http.post(`${this.url}/api/v1/attendence/break-start`,data);
  }
  public breakEnd(data:any) {
    // let empId = 1001;
    // punch-In-Time
    return this.http.post(`${this.url}/api/v1/attendence/break-end`,data);
  }

  public getAttendanceByDate(data1: any, data2: any, data3: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420'
      })
    };
  
    // Assuming environment.hostUrlNgrock is correctly defined in your environment file
    return this.http.get(
      `${environment.hostUrlNgrock}/api/v1/attendence/date/${data3}/${data1}/${data2}`, 
      httpOptions
    );
  }

  public getAttedanceByMonth(id:any,year:any,month:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420'
      })
    };
    return  this.http.get(
      `${environment.hostUrlNgrock}/api/v1/attendence/month/${id}/${year}/${month}`,
      httpOptions
    )


  }


  public getAllEmployeeOverTimeReq(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420'
      })
    };

    return (
      this.http.get(
        `${environment.hostUrlNgrock}/get-OvertimeRequest`,httpOptions
      )
    )
    
  }


  public getAttendanceByAttendanceById(id:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420'
      })
    };
    return (
      this.http.get(
        `${environment.hostUrlNgrock}/attendance/${id}`,httpOptions
      )
    )

  }


  public getupdateOverTime(data:any){
    return (
      this.http.post(
        `${environment.hostUrlNgrock}/update-overtime`,data
      )
    )

  }
  


  // ========== NOT IMPLEMENTED YET =============
  // method for getting personal info
  public personalInfo(userId:any) {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    // empId :number
    // let empId = 1002;
    return this.http.get(`${this.url}/api/v1/personal-infos/employeeId/${userId}`,{headers});
  }

  //method for posting leave form
  public leaveformPost(leaveData:any) {
    return this.http.post(this.url + "/api/v1/leave/requests", leaveData);
  }


  //method for getting All Leave forms
public getAllApprover(){
  const headers = new HttpHeaders({
    'ngrok-skip-browser-warning': '69420'
    });
return this.http.get(this.url + "/api/v1/leave-approvers/all",{headers});
}
//method for getting data by approver id 
public get_approverBy_id(id:any){
  const headers = new HttpHeaders({
    'ngrok-skip-browser-warning': '69420'
    });
return this.http.get(this.url + "/api/v1/leave-approvers/first-approver/"+id ,{headers});
}

//method for getting approverData by employee id
public getApproverDataById(id:any){
  const headers = new HttpHeaders({
    'ngrok-skip-browser-warning': '69420'
    });
return this.http.get(this.url + "/api/v1/leave-approvers/approver/"+id ,{headers});
}


  public getAllLeave(){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get(this.url + "/api/v1/leave/requests/all",
    {headers})
  }
  public getAllLeaveType(){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get(this.url + "/api/v1/leave/types",{headers})
  }
  public getAllLeave_for_pending(){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get(this.url + "/api/v1/leave/requests/pending" ,{headers})
  }
  public getAllLeave_for_rejected(){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get(this.url + "/api/v1/leave/requests/rejected",{headers})
  }
  public getAllLeave_for_accepted(){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get(this.url + "/api/v1/leave/requests/accepted",{headers})
  }


  public add_designation(data:any){
    return this.http.post(this.url+"/api/v1/designation",data)
  }


    // Leaving Form Detail GET EMPLOYEE BY ID
    public searchLeaveFormDetailsByemp_Id(ID: any) {
      const headers = new HttpHeaders({
        'ngrok-skip-browser-warning': '69420'
      });
      return this.http.get(
        `${this.url}/api/v1/leave/requests/employee/${ID}`,{headers}
      );
    }
    // Get Details of Leave Form By Leave Form Id
    public getLeaveFormDetailsByleaveForm_id(ID: any) {
      const headers = new HttpHeaders({
        'ngrok-skip-browser-warning': '69420'
      });
      return this.http.get(
        `${this.url}/api/v1/leave/requests/${ID}`,{headers}
      );
    }


  // update the Leave form 
  public updateLeaveForm(leaveRequestId:any,formData:any){
    console.log(leaveRequestId)
    return this.http.put(
      `${this.url}/api/v1/leave/requests/approved/manager/${leaveRequestId}`
      ,formData)
  }
  //
  public updateLeaveFormByHr(leaveRequestId:any,formData:any){
    console.log(leaveRequestId)
    return this.http.put(
      `${this.url}/api/v1/leave/requests/approved/hr/${leaveRequestId}`
      ,formData)
  }


  // payrolll

  public payrollDetailsEmployee(id:any,year:any,month:any){
    console.log(id,year,month);
    
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get(`${this.url}/payRoll/${id}/${year}/${month}`,{headers})
  }






}
