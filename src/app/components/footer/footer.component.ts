import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentdate: Date = new Date();
project_name:any
  constructor(private api:ServicesService) { 
    this.project_name=this.api.projectName
  }

  ngOnInit() {
  }

}
