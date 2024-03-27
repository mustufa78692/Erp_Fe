import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  public isCollapsed = true;
  isLoggedIn = true; 

  currentRoute: string;

  constructor(private router: Router, private route: ActivatedRoute, private logutService:ServicesService) {
    this.router.events.subscribe((event) => {
      // Use this.router.url to get the current URL
      this.currentRoute = this.router.url;
      // console.log(this.currentRoute);
      if(this.currentRoute=="/login" || this.currentRoute=="/register"|| this.currentRoute=="/save-password" ){
        // console.log("inside")
        this.isLoggedIn = false;
      }
    });
  }

  ngOnInit() {
    var html = document.getElementsByTagName("html")[0];
    // console.log(html);
    html.classList.add("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-default");
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });

  }
  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.remove("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-default");
  }

  doSomething(){
    // console.log(this.currentRoute);
    this.logutService.logOut()
  }
}
