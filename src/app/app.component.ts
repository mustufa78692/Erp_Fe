import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services/services.service';
import jwtDecode from 'jwt-decode';
import { DynamicRoutesService } from './dynamic-routes/dynamic-routes.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'argon-dashboard-angular';
public emp_id:any
  public isHam : boolean = true;

  public getData:any
  public getFirstApproverData:any;

  public hamTouch(){
    this.isHam = !this.isHam
    console.log('ham touch');
    
  }


  constructor(private services: ServicesService,private toastr: ToastrService) {
   }
   ngOnInit(): void {
setInterval(() => {
  const expiryTime = this.services.getExpiryTime(); // Get expiry time from your auth service

  if (expiryTime) {
    const expiryDate = new Date(expiryTime);
    const currentTime = new Date();
    const timeUntilExpiry = expiryDate.getTime() - currentTime.getTime();
    // console.log(timeUntilExpiry);

    // Check if time until expiry is 2 minutes (120000 milliseconds)
    if (timeUntilExpiry <= 120000 && timeUntilExpiry > 118000) { // Adding a buffer to ensure it triggers only once
      // alert("Inside the time");
      // this.toastr.error("Inside the API");

      let retrievedUserString = sessionStorage.getItem('user');

      // Convert user string back to object
      let retrievedUser = JSON.parse(retrievedUserString);
      let decodedPassword = atob(retrievedUser.password);

      // console.log('Decoded Password:', decodedPassword);
      // console.log(retrievedUser);

      let sendData = {
        username: retrievedUser.username,
        password: decodedPassword,
        remember: retrievedUser.remember
      };

      // console.log(sendData);

      this.services.login(sendData).subscribe((successResponse:any) => {
        // console.log(successResponse);
          localStorage.setItem("token", successResponse.token);
          //     // this.toastr.success('Successfully Refreshed Token!');

              localStorage.setItem('expieryTime', successResponse.expieryTime);
      }, (error) => {
        console.log(error);
        this.toastr.error('Token refresh failed! You will be automatically logged out in 2 minutes.')

        // this.toastr.error('Token refresh failed! u automatically logout in 2min ');

        // this.services.logOut()
      });
    }
    // else if (timeUntilExpiry <= 0){
    //   this.services.logOut()

    // }
    else if (timeUntilExpiry <= 0) {

      let retrievedUserString = sessionStorage.getItem('user');

      // Convert user string back to object
      let retrievedUser = JSON.parse(retrievedUserString);
      let decodedPassword = atob(retrievedUser.password);

      // console.log('Decoded Password:', decodedPassword);
      // console.log(retrievedUser);

      let sendData = {
        username: retrievedUser.username,
        password: decodedPassword,
        remember: retrievedUser.remember
      };

      this.services.login(sendData).subscribe((successResponse:any)=>{
        localStorage.setItem("token", successResponse.token);
        //     // this.toastr.success('Successfully Refreshed Token!');

            localStorage.setItem('expieryTime', successResponse.expieryTime);

      },((errorResponse)=>{
        this.toastr.error('Token has expired!');
        this.services.logOut();
      }))
      // console.log("Token has expired");
      
    }
  }
}, 1000); // Check every second
  }



 
}
 