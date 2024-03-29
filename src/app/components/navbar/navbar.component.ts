// import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
// import { ROUTES } from '../sidebar/sidebar.component';
// import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
// import { Router } from '@angular/router';
// import { ServicesService } from 'src/app/services/services.service';
// import jwtDecode from 'jwt-decode';
// import { ToastrService } from 'ngx-toastr';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.scss']
// })
// export class NavbarComponent implements OnInit {
//   public focus;
//   public listTitles: any[];
//   public location: Location;
//   public emp_id:any
//   public userData:any;

//   getAllEmp:any;
//   constructor(private toastr: ToastrService,location: Location,  private element: ElementRef, private router: Router,public _authService:ServicesService) {
//     this.location = location;
//   }

//   public isHamburgerOpen: boolean = true;

//   @Output() hamIconTouch= new EventEmitter<void>();


  
//   public hamburger(){
//     console.log('hamburger touch');
//     this.hamIconTouch.emit()
    
//   }

//   ngOnInit() {

// this._authService.getAllActiveEmployee().subscribe((successResponse)=>{
//   console.log(successResponse)
//   this.getAllEmp=successResponse

//   console.log(this.getAllEmp)

// },((errorResponse)=>{
//   this.toastr.error("Something Went Wrong")
  

// }))



// // this._authService.getToken()
// const token=this._authService.getToken()
// if (token) {
//   const decodedToken: any = jwtDecode(token);
//   console.log(decodedToken.sub)
//   const get_emp = decodedToken.sub; 
//   // console.log(get_emp) // Assuming 'id' is the property in the decoded token
//   this.emp_id=get_emp

// } else {
//   console.error('Token not found.');
// }

// this._authService.personalInfo(this.emp_id).subscribe((sucessResponse)=>{
//   console.log(sucessResponse)
//   this.userData = sucessResponse;

// })

//     this.listTitles = ROUTES?.filter(listTitle => listTitle);
//   }
//   getTitle(){
//     var titlee = this.location.prepareExternalUrl(this.location.path());
//     if(titlee.charAt(0) === '#'){
//         titlee = titlee.slice( 1 );
//     }

//     for(var item = 0; item < this.listTitles?.length; item++){
//         if(this.listTitles[item].path === titlee){
//             return this.listTitles[item].title;
//         }
//     }
//     return 'Dashboard';
//   }

// }





import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public emp_id:any
  public userData:any;

  getAllEmp:any;
  constructor(private toastr: ToastrService,location: Location,  private element: ElementRef, private router: Router,public _authService:ServicesService) {
    this.location = location;
  }

  public isHamburgerOpen = true;

  @Output() hamIconTouch= new EventEmitter<void>();


  
  toggleNavbar() {
    this.isHamburgerOpen = !this.isHamburgerOpen;
  }
  
  
  
    
  // }
  public hamburger() {
    this.toggleNavbar();
  }

  ngOnInit() {

this._authService.getAllActiveEmployee().subscribe((successResponse:any)=>{
  console.log(successResponse[0].employeeId)


  this.getAllEmp=successResponse
  // console.log()
  // let filterData=successResponse.filter((item)=>{
  //   if (item?.onboardHrApprovalStatus === 'pending' && !item?.filledForm){
  //     return item

  //   }
  // })
  // console.log(filterData)

},((errorResponse)=>{
  this.toastr.error("Something Went Wrong")
  

}))



// this._authService.getToken()
const token=this._authService.getToken()
if (token) {
  const decodedToken: any = jwtDecode(token);
  console.log(decodedToken.sub)
  const get_emp = decodedToken.sub; 
  // console.log(get_emp) // Assuming 'id' is the property in the decoded token
  this.emp_id=get_emp

} else {
  console.error('Token not found.');
}

this._authService.personalInfo(this.emp_id).subscribe((sucessResponse)=>{
  console.log(sucessResponse)
  this.userData = sucessResponse;

})

    this.listTitles = ROUTES?.filter(listTitle => listTitle);
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles?.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

}
