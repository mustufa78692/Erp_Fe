import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private authService : ServicesService, private router : Router) { }

  ngOnInit(): void {
  }

// PASSWORD SHOW AND HIDE LOCK /////////////////////////////////////
  public isPassHide = [true,true];
  public passType = ['password','password']

  public passHideShow(index : number){
    this.isPassHide[index] = !this.isPassHide[index]

    if(this.isPassHide[index])
      this.passType[index]= 'password'
    else
      this.passType[index] = 'text'
  }

// FORGOT PASSWORD 3 STEP PROCESS //////////////////////////////

  // storing forgot password email
  public forgot_pass_email : string;

  // success and error message text color
  public text_color : boolean;

// ========== |STEP-1| EMAIL VERIFICATION =======

  public email_verify_message : string;
  public isEmailExist : boolean = false;

  public onForgotPassword(form : NgForm){
    this.forgot_pass_email = form.value.email;
    this.authService.forgot_password(form.value).subscribe( (result : any) => {
      console.log(result);

      if(result.status){
        this.text_color = true;
        this.email_verify_message = 'Email verified!'
        setTimeout( ()=> {
          this.isEmailExist = true;
        },2000)
      }
      else{
          this.text_color = false;
          this.email_verify_message = 'Email not exist!'
      }
    })
  }
  
// ========== |STEP-2| OTP VERIFICATION =======

  public otp_verify_message : string;
  public isOtpVerified : boolean = false;
  
  public onOtpVerification(form : NgForm){
    let otp = form.value;
    otp = +(otp.num1 + otp.num2 + otp.num3 + otp.num4 + otp.num5 + otp.num6)
    let data : {} = {
      email : this.forgot_pass_email,
      otp
    }

    this.authService.otp_verification(data).subscribe( (result : any) => {
      console.log(result);
      
      if(result.status){
        this.text_color = true;
        this.otp_verify_message = 'Otp verified!'
        setTimeout( ()=> {
          this.isOtpVerified = true;
        },2000)
      }
      else{
        this.text_color = false
        this.otp_verify_message = 'Invalid otp!'
      }
    })
  }

// ========== |STEP-3| PASSWORD CHANGE =======

  public pass_change_message : string;

  public newPassSet(form : NgForm){
    let password : string = form.value.password 
    let data : {} = {
      email : this.forgot_pass_email,
      password
    }

    this.authService.new_pass_set(data).subscribe( (result:any) => {
      console.log(result);
      
      if(result.status){
        this.text_color = true;
        this.pass_change_message = 'password changed successfully!';
        setTimeout( ()=> {
          this.router.navigate(['/'])
        },2000)
      }
      else{
        this.text_color = false;
        this.pass_change_message = 'someting went wrong!';
      }
      
    })
  }

/////////////////////////////////////////////////////////////
}



 