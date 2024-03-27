import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { ServicesService } from "src/app/services/services.service";

// export class NewUser {
//   constructor(
//     public username: string,
//     public email: string,
//     public password: string,
//     public agree: boolean
//   ) {}
// }
export class NewUser {
  constructor(
    public username: string,
    public otp: string, // Add the OTP property here
    public agree: boolean
  ) {}
}

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {

  public newUser: NewUser = new NewUser("", "",false);
  public usernameError: string = "";
  public otpError: string = "";
  public message: string = "";
  public status: boolean = false;

ngOnInit(): void {
  
}

  constructor(
    private registerService: ServicesService, // Make sure you have this service
    private router: Router,
    private toastr: ToastrService
  ) {}

  public onSubmit(form: NgForm) {
    // Extract form values for easy access
    let { username, otp } = this.newUser;

    // Username validation
    let usernamePattern = /^[0-9]+$/;
    if (username === "") {
      this.usernameError = "Employee ID is required!";
    } else if (!usernamePattern.test(username)) {
      this.usernameError = "Employee ID must only contain numbers";
    } else if (username.length < 3) {
      this.usernameError = "Employee ID must be at least 3 characters";
    } else {
      this.usernameError = "";
    }

    // OTP validation
    if (otp === "") {
      this.otpError = "OTP is required!";
    } else if (otp.length < 5) { // Adjust the length requirement as necessary
      this.otpError = "OTP must be at least 6 characters";
    } else {
      this.otpError = "";
    }

    // If there are no errors, proceed to register the user
    if (!this.usernameError && !this.otpError) {
      // this.router.navigate(['/save-password'],{ state: { username: username } })
      // console.log('Submitting user data:', this.newUser);
      this.registerService.verify_employee_otp(this.newUser).subscribe((sucess:any)=>{
        // console.log(sucess.status)
        if(sucess.status==true){
          setTimeout(()=>{
            this.toastr.info("Successfully verified OTP", "Success");

            this.router.navigate(['/save-password'],{ state: { username: username } })
          },2000)

        }else {
          this.toastr.error("An Error Occurred While Verify The Verify OTP")
                this.message = "An error occurred while Verify the OTP!";
              }
      },((errorResponse)=>{
        console.log(errorResponse)
        this.toastr.error("Invalid OTP or Username!", "Error");


      }))
      


   
    }
  }



    


}
