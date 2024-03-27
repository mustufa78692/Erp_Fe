// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable, Subscription, interval, timer } from 'rxjs';
// import { ToastrService } from 'ngx-toastr';
// import { ServicesService } from './services.service';
// import { Injectable } from '@angular/core';

// @Injectable() // Add this line
// export class AuthInterceptor implements HttpInterceptor {
//   private promptBefore = 2 * 60 * 1000; // 2 minutes before expiry
//   private timerSubscription: Subscription | undefined;

//   constructor(private authService: ServicesService, private toastr: ToastrService) {
//     this.checkSession();
//   }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Intercept logic here if needed
//     return next.handle(req);
//   }

//   private checkSession() {
//     const expiryTime = this.authService.getExpiryTime(); // Get expiry time from your auth service
//     console.log(expiryTime);

//     if (expiryTime) {
//       const expiryDate = new Date(expiryTime);
//       const currentTime = new Date();
//       const timeUntilExpiry = expiryDate.getTime() - currentTime.getTime();

//       if (timeUntilExpiry > 0) {
//         this.timerSubscription = timer(timeUntilExpiry - this.promptBefore).subscribe(() => {
//           this.toastr.error('Time to login again!', 'Session Expiring Soon');
//         });
//       } else if (timeUntilExpiry <= 0) {
//         // Session has expired or is about to expire
//         this.toastr.error('Time to login again!', 'Session Expiring Soon');
//         this.authService.logOut();
//       }
//     }
//   }

//   ngOnDestroy() {
//     // Unsubscribe from timer when component is destroyed
//     if (this.timerSubscription) {
//       this.timerSubscription.unsubscribe();
//     }
//   }
// }






import { Injectable, OnDestroy } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, Subscription, timer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from './services.service'; // Adjust the import path as needed

@Injectable()
export class AuthInterceptor implements HttpInterceptor, OnDestroy {
  private promptBefore = 2 * 60 * 1000; // 2 minutes before expiry
  private destroy$ = new Subject<void>();

  constructor(private authService: ServicesService, private toastr: ToastrService) {
    // this.checkSession();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Intercept logic here if needed
    return next.handle(req);
  }

  // private checkSession() {
  //   const expiryTime = this.authService.getExpiryTime(); // Get expiry time from your auth service
  
  // //   if (expiryTime) {
  // //     const expiryDate = new Date(expiryTime);
  // //     const currentTime = new Date();
  // //     const timeUntilExpiry = expiryDate.getTime() - currentTime.getTime();
  // //     console.log(timeUntilExpiry);
  
  // //     if (timeUntilExpiry > 0 && timeUntilExpiry <= this.promptBefore) {
  // //       timer(timeUntilExpiry - this.promptBefore).pipe(takeUntil(this.destroy$)).subscribe(() => {
  // //         this.toastr.error('Time to login again!', 'Session Expiring Soon');
  // //         let retrievedUserString = sessionStorage.getItem('user');

  // //         // Convert user string back to object
  // //         let retrievedUser = JSON.parse(retrievedUserString);
  // //         let decodedPassword = atob(retrievedUser.password);

  // //         console.log('Decoded Password:', decodedPassword);
  // //         console.log(retrievedUser);
  // //         let sendData:any={
  // //           username: retrievedUser.username,
  // //   password: decodedPassword,
  // //   remember: retrievedUser.remember
  // // };
  // //         console.log(sendData);

  // //         // this.authService.login(sendData).subscribe((successResponse:any)=>{
  // //         //   console.log(  successResponse)
  // //         //   localStorage.setItem("token", successResponse.token);
  // //         //     // this.toastr.success('Successfully Refreshed Token!');

  // //         //     localStorage.setItem('expieryTime', successResponse.expieryTime);

  // //         // },((errorResponse)=>{
  // //         //   this.authService.logOut()
  // //         // }))
  // //       });
  // //     } else if (timeUntilExpiry <= 0) {
  // //       // Session has expired or is about to expire
  // //       this.toastr.error('Time to login again!', 'Session Expired ');
  // //       let retrievedUserString = sessionStorage.getItem('user');

  // //         // Convert user string back to object
  // //         let retrievedUser = JSON.parse(retrievedUserString);
  // //         let decodedPassword = atob(retrievedUser.password);

  // //         console.log('Decoded Password:', decodedPassword);
  // //         console.log(retrievedUser);
  // //         let sendData:any={
  // //           username: retrievedUser.username,
  // //   password: decodedPassword,
  // //   remember: retrievedUser.remember
  // // };
  // //         console.log(sendData);

  // //         this.authService.login(sendData).subscribe((successResponse:any)=>{
  // //           console.log(  successResponse)
  // //           localStorage.setItem("token", successResponse.token);
  // //           // this.toastr.success('Successfully Refreshed Token!');

  // //           localStorage.setItem('expieryTime', successResponse.expieryTime);

  // //         },((errorResponse)=>{
  // //           this.authService.logOut()
  // //         }))

  // //       // this.authService.logOut();
  // //     }
  // //   }
  // }
  
//   private checkSession() {
//     const expiryTime = this.authService.getExpiryTime(); // Get expiry time from your auth service

//     if (expiryTime) {
//       const expiryDate = new Date(expiryTime);
//       const currentTime = new Date();
//       const timeUntilExpiry = expiryDate.getTime() - currentTime.getTime();
// console.log(timeUntilExpiry)
//       if (timeUntilExpiry > 150000 && timeUntilExpiry > 0 ) {
//         timer(timeUntilExpiry - this.promptBefore).pipe(takeUntil(this.destroy$)).subscribe(() => {
//           this.toastr.error('Time to login again!', 'Session Expiring Soon');
//         });
//       } else if (timeUntilExpiry <= 0) {
//         // Session has expired or is about to expire
//         this.toastr.error('Time to login again!', 'Session Expiring Soon');
//         this.authService.logOut();
//       }
//     }
//   }

  ngOnDestroy() {
    // Unsubscribe from timer when component is destroyed
    this.destroy$.next();
    this.destroy$.complete();
  }
}









// export class AuthInterceptor implements HttpInterceptor {
//   private promptBefore = 2 * 60 * 1000; // 2 minutes before expiry

//   constructor(private authService: ServicesService, private toastr: ToastrService) {
//     this.checkSession();
//   }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Intercept logic here if needed
//     return next.handle(req);
//   }

//   private checkSession() {
//     const expiryTime = this.authService.getExpiryTime(); // Get expiry time from your auth service
//     console.log(expiryTime);
    


//     if (expiryTime) {
//       const expiryDate = new Date(expiryTime);
//       console.log(expiryDate);
//       const currentTime = new Date();
//       console.log(currentTime);
//       const timeUntilExpiry = expiryDate.getTime() - currentTime.getTime();
//       console.log(timeUntilExpiry);


//       if (timeUntilExpiry > 0) {
//         timer(timeUntilExpiry - this.promptBefore).subscribe(() => {
//           // Replace alert with Toastr
//           this.toastr.error('Time to login again!', 'Session Expiring Soon');
//           // console.log('Time to login again!');
//         });
//       }else if(timeUntilExpiry == 0){
//         this.authService.logOut();

//       }
//     }
//   }
// }






// export class AuthInterceptor implements HttpInterceptor {
//   private promptBefore = 2 * 60 * 1000; // 2 minutes before expiry
//   private timerSubscription: Subscription | undefined;

//   constructor(private authService: ServicesService, private toastr: ToastrService) {
//     this.checkSession();
//   }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Intercept logic here if needed
//     return next.handle(req);
//   }

//   private checkSession() {
//     const expiryTime = this.authService.getExpiryTime(); // Get expiry time from your auth service
//     console.log(expiryTime);

//     if (expiryTime) {
//       const expiryDate = new Date(expiryTime);
//       const currentTime = new Date();
//       const timeUntilExpiry = expiryDate.getTime() - currentTime.getTime();

//       if (timeUntilExpiry > 0) {
//         this.timerSubscription = timer(timeUntilExpiry - this.promptBefore).subscribe(() => {
//           this.toastr.error('Time to login again!', 'Session Expiring Soon');
//         });
//       } else if (timeUntilExpiry <= 0) {
//         // Session has expired or is about to expire
//         this.toastr.error('Already Logout!', 'Session Expired');
//         this.authService.logOut();
//       }

//       // Show Toastr message every 15 seconds
//       this.timerSubscription = interval(15000).subscribe(() => {
//         this.toastr.error('Time to login again!', 'Session Expiring Soon');
//       });
//     }
//   }

//   ngOnDestroy() {
//     // Unsubscribe from timer when component is destroyed
//     if (this.timerSubscription) {
//       this.timerSubscription.unsubscribe();
//     }
//   }
// }



