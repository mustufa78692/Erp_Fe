import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ServicesService } from 'src/app/services/services.service';



// export class NewUser {
//   constructor(
//     public password: string,
//     public confirmPassword: string,
//     public agree: boolean
//   ) {}
// }

export class NewUser {
  constructor(
    public username: string,
    public password: string,
    public confirmPassword: string,
    public agree: boolean
  ) {}
}



@Component({
  selector: 'app-save-password',
  templateUrl: './save-password.component.html',
  styleUrls: ['./save-password.component.scss']
})
export class SavePasswordComponent implements OnInit {
  // public newUser: NewUser = new NewUser("", "", false);
  newUser:any
  public passwordError: string = "";
  public confirmPasswordError: string = "";
  public message:any
  public status:any

  constructor(
    private registerService: ServicesService, // Make sure you have this service
    private router: Router
  ) {
    // Retrieving the username from the router state
  // const navigation = this.router.getCurrentNavigation();
  // const username = navigation?.extras.state?.username;
  // console.log('Received username:', username);

  const navigation = this.router.getCurrentNavigation();
  const username = navigation?.extras.state?.username;
  console.log('Received username:', username);

  // Initialize newUser with the retrieved username
  this.newUser = new NewUser(username, '', '', false);
  }

  ngOnInit(): void {
    
  }

  public onSubmit(form: NgForm) {
    // let { password, confirmPassword } = this.newUser;
    let { password, confirmPassword, username } = this.newUser;
    // console.log()
  
    // Password validation
    if (password === "") {
      this.passwordError = "Password is required!";
    } else if (password.length < 6) {
      this.passwordError = "Password must be at least 6 characters";
    } else {
      this.passwordError = "";
    }
  
    // Confirm Password validation
    if (confirmPassword === "") {
      this.confirmPasswordError = "Confirm password is required!";
    } else if (confirmPassword !== password) {
      this.confirmPasswordError = "Passwords do not match";
    } else {
      this.confirmPasswordError = "";
    }
  
    // If there are no errors, proceed with the registration logic
    if (!this.passwordError && !this.confirmPasswordError) {
      // console.log('Submitting user data:', this.newUser);

      console.log('Submitting user data:', this.newUser);

      // Construct the data in the required format
      const postData = {
        username: username, // Ensure this is the username you want to send
        password: password
      };
console.log(postData)  
  
      // Here you should call the appropriate service method to handle the registration
      // Update this part based on your backend API
      this.registerService.save_password(postData).subscribe(
        (result: any) => {
          this.status=result.status;
          if (result.status) {
            this.message = "Account created successfully!";
            setTimeout(() => {
              this.router.navigate(["/login"]); // Or any other route you wish to navigate to
            }, 2000);
          } else {
            this.message = "An error occurred while creating the account!";
          }
        },
        (error) => {
          console.error('Error during registration:', error);
          this.message = "Failed to create account. Please try again later.";
        }
      );
    }
  }
  
  

}
