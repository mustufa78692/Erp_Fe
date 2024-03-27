import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-notification',
  templateUrl: './all-notification.component.html',
  styleUrls: ['./all-notification.component.scss']
})
export class AllNotificationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToOverTime(){
    console.log("hskfjh",)
    this.router.navigate([`/overtime-request`])
  }
  navigateToPending(){
    console.log("dafjkad")
    this.router.navigate([`/notifications`])

  }
  navigateToAll (){
    this.router.navigate([`/all-notifications-for-leave`])

  }
  navigateToRejected (){
    this.router.navigate([`/leave-rejected-request`])

  }
  navigateToAccepted (){
    this.router.navigate([`/leave-accepted-request`])

  }
}
