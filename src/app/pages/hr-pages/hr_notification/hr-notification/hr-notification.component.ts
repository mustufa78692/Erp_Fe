import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hr-notification',
  templateUrl: './hr-notification.component.html',
  styleUrls: ['./hr-notification.component.scss']
})
export class HrNotificationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToOverTime(){
    console.log("hskfjh",)
    this.router.navigate([`/overtime-request`])
  }
  navigateToPending(){
    console.log("dafjkad")
    this.router.navigate([`/hr_pending_leave_request`])

  }
  
  navigateToAll (){
    this.router.navigate([`/hr_all_leave_request`])

  }
  navigateToRejected (){
    this.router.navigate([`/leave-rejected-request`])

  }
  navigateToAccepted (){
    this.router.navigate([`/leave-accepted-request`])

  }

}
