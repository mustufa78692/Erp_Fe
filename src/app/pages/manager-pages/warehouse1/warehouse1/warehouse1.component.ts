import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components

import { ServicesService } from 'src/app/services/services.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-warehouse1',
  templateUrl: './warehouse1.component.html',
  styleUrls: ['./warehouse1.component.scss']
})
export class Warehouse1Component implements OnInit {
  response: any = new Subject();
  public isLoading = new BehaviorSubject(true);


  constructor(private services : ServicesService,private router: Router){}
  ngOnInit(): void {
  }
  public searchEmpByEmail(event: any) {
    
  }

  navigate(): void {
    this.router.navigate([`update-product`]);
  }

  redirectToPage(){
    this.router.navigate([`add-product`]);
  }
}
