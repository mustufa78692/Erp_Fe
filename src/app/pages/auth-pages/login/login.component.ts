// import { Component, OnInit, OnDestroy } from "@angular/core";
// import { NgForm } from "@angular/forms";
// import { Router } from "@angular/router";
// import { ServicesService } from "src/app/services/services.service";
// import jwtDecode from "jwt-decode";

// export class User {
//   constructor(
//     public username: string,
//     public password: string,
//     public remember: boolean,
//     public role: string
//   ) {}
// }

// @Component({
//   selector: "app-login",
//   templateUrl: "./login.component.html",
//   styleUrls: ["./login.component.scss"],
// })
// export class LoginComponent implements OnInit, OnDestroy {
//   constructor(private loginServices: ServicesService, private router: Router) {}

//   ngOnInit() {}
//   ngOnDestroy() {}

//   public user: any = new User("", "", false, "ROLE_ADMIN");
//   public usernameError: string = "";
//   public passError: string = "";
//   public message: string = "";
//   public status: number = 0;
//   public buttonActive: boolean[] = [true, false, false, false, false]; // Added two more roles

//   public isPassHide = true;
//   public passType = "password";

//   public passHideShow() {
//     this.isPassHide = !this.isPassHide;

//     if (this.isPassHide) this.passType = "password";
//     else this.passType = "text";
//   }

//   public roleProvider(role: string) {
//     // adding role
//     this.user.role = role;

//     // Role Selection
//     switch (role) {
//       // ----- disabled role buttons except admin button
//       case "ROLE_ADMIN":
//         this.buttonActive[0] = true;
//         this.buttonActive[1] = false;
//         this.buttonActive[2] = false;
//         break;

//       // ----- disabled role buttons except employee button
//       case "ROLE_EMPLOYEE":
//         this.buttonActive[0] = false;
//         this.buttonActive[1] = true;
//         this.buttonActive[2] = false;
//         break;

//       // ----- disabled role buttons except manager button
//       case "ROLE_MANAGER":
//         this.buttonActive[0] = false;
//         this.buttonActive[1] = false;
//         this.buttonActive[2] = true;
//         break;
//     }
//   }

//   // LOGIN FORM SUBMIT IF VALIDATE
//   public onSubmit(form: NgForm) {
//     this.user.username = form.value.username;
//     this.user.password = form.value.password;
//     this.user.remember = form.value.remember;

//     // call login function (passing user object)
//     this.loginServices.login(this.user).subscribe((result: any) => {
//       this.status = result.status;
//       // console.log(result);
//       // console.log(result.token);

//       // console.log(result.info);

//       if (result.token) {
//         var decoded = jwtDecode(result.token);
//         // console.log("********************************************");
//         // console.log("JWT  DECODED !");
//         console.log(decoded);
//         // console.log("********************************************");
//         localStorage.setItem("token", result.token);
//         this.message = "successfully loggedIn!";
//         this.loginServices.setRole(this.user.role);
//         setTimeout(() => {
//           if (
//             this.loginServices.getRole() == "ROLE_ADMIN" 
//             // ||
//             // this.loginServices.getRole() == "ROLE_MANAGER"
//           )
//             this.router.navigate(["/dashboard"]);
//           else if (this.loginServices.getRole() == "ROLE_EMPLOYEE")
//             this.router.navigate(["/personal"]);
//           else if (this.loginServices.getRole() == "ROLE_MANAGER")
//           this.router.navigate(["/headOfManager"]);
//         }, 1000);
//       } else this.message = "Invalid email or password!";
//     });
//   }
// }


import { Component, OnInit, OnDestroy, NgZone } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ServicesService } from "src/app/services/services.service";
import jwtDecode from "jwt-decode";
import { ToastrService } from "ngx-toastr";


export class User {
  constructor(
    public username: string,
    public password: string,
    public remember: boolean,
    // public role: string,
    
  ) {}
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {

  public emp_id:any;
  public user: User = new User("", "", false,);
  public usernameError: string = "";
  public passError: string = "";
  public message: string = "";
  public status: number = 0;
  // public buttonActive: boolean[] = [false, false, false, false, false];
  

  public isPassHide = true;
  public passType = "password";
  public employeeId:any;

  constructor( private toastr: ToastrService,private loginServices: ServicesService, private router: Router,private zone: NgZone ,private projectName:ServicesService ) {}

  ngOnInit() {
console.log(this.projectName.projectName)

    
  }
  ngOnDestroy() {}

  public passHideShow() {
    this.isPassHide = !this.isPassHide;
    this.passType = this.isPassHide ? "password" : "text";
  }

  // public roleProvider(role: string) {
  //   this.user.role = role;
  //   this.buttonActive.fill(false); // Deactivate all buttons
  //   switch (role) {
  //     case "ROLE_ADMIN":
  //       this.buttonActive[0] = true;
  //       // this.buttonActive[0] = true;
  //       break;
  //     case "ROLE_EMPLOYEE":
  //       this.buttonActive[1] = true;
  //       break;
  //     case "ROLE_MANAGER":
  //       this.buttonActive[2] = true;
  //       break;
  //     case "ROLE_SUBADMIN":
  //       this.buttonActive[3] = true;
  //       break;
  //     case "ROLE_HR":
  //       this.buttonActive[4] = true;
  //       break;
  //   }
  // }
  public object:any


public onSubmit(form: NgForm) {
  let encodedPassword = btoa(form.value.password);
  console.log('encodedPassword', typeof(encodedPassword))
  let decodedPassword = atob(encodedPassword);

    console.log('Decoded Password:', typeof(decodedPassword));
  this.user.username = form.value.username;
  this.user.password = form.value.password;
  this.user.remember = form.value.remember;
  // console.log(this.user);

  let storeSession: any = {
    username: form.value.username,
    password: encodedPassword,
    remember: form.value.remember
  };
  // console.log(storeSession)

  let userString = JSON.stringify(storeSession);

// Store user string in session storage
sessionStorage.setItem('user', userString);

// Retrieve user string from session storage
// let retrievedUserString = sessionStorage.getItem('user');

// // Convert user string back to object
// let retrievedUser = JSON.parse(retrievedUserString);

// console.log(retrievedUser);


  this.loginServices.login(this.user).subscribe({
    next: (result: any) => {
      // console.log(result.currentDesignationAndTask
      //   )
        var dataToStore = result.currentDesignationAndTask;
        // console.log(dataToStore);

        // Convert the data to JSON format
        var jsonData = JSON.stringify(dataToStore);
        
        // Store the JSON data in localStorage
        localStorage.setItem('currentDesignationAndTask', jsonData);;
      localStorage.setItem('expieryTime', result.expieryTime);

      this.status = result.status;
      if (result.token) {
        var decoded: any = jwtDecode(result.token);
        // console.log(decoded);
        this.employeeId = decoded.sub;
        localStorage.setItem("token", result.token);
        this.message = "Successfully logged in!";


        // console.log(result.currentDesignationAndTask[0].designation[0].designationName)
        // this.loginServices.setRole(result.currentDesignationAndTask[0].designation[0].designationName);
        // this.loginServices.set_designationId()

        if(result?.currentDesignationAndTask[0]?.designation[0]?.designationName !=null){
          this.loginServices.setRole(result?.currentDesignationAndTask[0]?.designation[0]?.designationName);
          var designationIdValue = result.currentDesignationAndTask[0].designation[0].designationId;
// console.log(designationIdValue);
// Set the value in local storage with the key "designationId"
localStorage.setItem("designationId", designationIdValue);

        this.navigateBasedOnRole();
        

        }else{
          // console.log("insdide the role")
          this.loginServices.setRole("Admin")
          this.navigateBasedOnRole();

        }
        // Assuming result is the object containing your data

      } else {
        this.message = "Invalid email or password!";
        // Optionally use a custom alert here
        // alert(this.message);
      }
    },
    error: (err: any) => {
      // console.error(err.error.message);
      // Display the error message
      this.toastr.error(err.error.message,"Something Went Wrong")
      this.message = err.error.message;
      // Optionally use a custom alert here
      // alert(this.message);
    }
  });
}

private navigateBasedOnRole() {
  // console.log("inside the login page");
  const token=this.loginServices.getToken()
  if (token) {
    const decodedToken: any = jwtDecode(token);
    // console.log(decodedToken.sub)
    const get_emp = decodedToken.sub; 
    // console.log(get_emp) // Assuming 'id' is the property in the decoded token
    this.emp_id=get_emp

  } else {
    // console.error('Token not found.');
  }
  // console.log(this.emp_id) // Assuming 'id'

  this.loginServices.personalInfo(this.emp_id).subscribe((successResponse:any)=>{
    // console.log(successResponse)
    if(successResponse?.onboardHrApprovalStatus=='pending' && successResponse?.filledForm==false){
              // console.log("hrApproval Status Pending")

              this.toastr.info("Successfully Login")
              this.router.navigate(['/onBoard-updating']);
            
    
            }else if(successResponse?.onboardHrApprovalStatus=='pending' && successResponse?.filledForm==true){
              // console.log("onboardHrApprovalStatus waiting ")
              this.toastr.info("Successfully Login")
              this.router.navigate(['/waiting-for-hr-approval']);
    
            }else{
              this.router.navigate(["/user-profile"]);
              this.toastr.info("Successfully Login")
              // this.router.navigate(["/comman-dasboard"]);
            }
  },((errorResponse)=>{
    this.toastr.error("Something Went Wrong")
  }))

  // this.router.navigate(["/comman-dasboard"]);
// this.loginServices.personalInfo(this.employeeId).subscribe((SuccessData)=>{

// })
  
  
  // switch (role) {
  //   case "ROLE_ADMIN":
  //     this.router.navigate(["/dashboard"]);
  //     break;
  //   case "ROLE_EMPLOYEE":
  //     this.loginServices.personalInfo(this.employeeId).subscribe((data:any)=>{
  //       console.log("jhgkjhkjh",data);
  //       if(data.onboardHrApprovalStatus=='pending' && data.filledForm==false){
  //         console.log("hrApproval Status Pending")
  //         this.router.navigate(['/onBoard-updating']);
        

  //       }else if(data.onboardHrApprovalStatus=='pending' && data.filledForm==true){
  //         console.log("onboardHrApprovalStatus waiting ")
  //         this.router.navigate(['/waiting-for-hr-approval']);

  //       }else{
  //         this.router.navigate(["/personal"]);
  //       }
  //     },((err:any)=>{
  //       console.log(err);
  //     }))
      
      
  //     break;
  //   case "ROLE_MANAGER":
  //     this.router.navigate(["/headOfManager"]);
  //     break;
  //   case "ROLE_SUBADMIN":
  //     // Navigation for Sub Admin
  //     break;
  //   case "ROLE_HR":
      
  //     // console.log("syed")
  //     console.log(this.employeeId);
      
  //     this.router.navigate(["/dashboard"]);
  //     // Navigation for HR
  //     break;
  //   // Add more cases as needed
  // }
}
}
