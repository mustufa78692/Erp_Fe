import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  public object:any
  constructor(private services : ServicesService,private router: Router, private zone: NgZone) { }

  ngOnInit(): void {
    const token = this.services.getToken();

 
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userId = decodedToken.sub; 
      console.log(userId) // Assuming 'id' is the property in the decoded token
      this.services.personalInfo(userId).subscribe((success:any)=>{
      
       
        
            this.object = success;
          
      })
    } else {
      console.error('Token not found.');
    }
  }


  



  public isAlertBox : boolean = true;

  public alertClose(){
    this.isAlertBox = false;
  }
  public navigate(id: number): void {
    // this.router.navigate([`get-fullemployee-details/${id}`]);
    
  }

}
