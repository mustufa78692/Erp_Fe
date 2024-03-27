import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country, State, City } from 'country-state-city';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-add-academic-calender',
  templateUrl: './add-academic-calender.component.html',
  styleUrls: ['./add-academic-calender.component.scss']
})
export class AddAcademicCalenderComponent implements OnInit {

  paginatedData:any

  
  holidayForm: FormGroup;
  public Countries: any[] = []
  // dayDifference: number;

  constructor(private fb: FormBuilder , private api:ServicesService,private toastr: ToastrService ) {}

  ngOnInit() {

    this.api.getAllHolidays().subscribe((successResponse:any)=>{
console.log(successResponse)
let Data=successResponse.reverse();
this.paginatedData=Data
    },((errorResponse)=>{
      console.log(errorResponse);
      

    }))
    this.Countries = Country.getAllCountries()
    console.log(this.Countries)
    this.initForm();
  }

  private initForm() {
    this.holidayForm = this.fb.group({
      name: ['', Validators.required],
      startHolidayDate: ['', Validators.required],
      endHolidayDate: ['', Validators.required],
      countryName: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.holidayForm.valid) {
      const formData = this.holidayForm.value;
      // Calculate total number of holidays and send to backend
      const totalHolidays = this.calculateTotalHolidays(formData.startHolidayDate, formData.endHolidayDate);
      // Now you can send `totalHolidays` to the backend or perform any other action
      console.log('Total Holidays:', totalHolidays);


      let sendData={
        name:this.holidayForm.value.name,
        startHolidayDate:this.holidayForm.value.startHolidayDate,
        endHolidayDate:this.holidayForm.value.endHolidayDate,
        numberOfHoliday:totalHolidays,
        countryName:this.holidayForm.value.countryName

      }

      console.log(sendData)
      this.api.addHolidays(sendData).subscribe((successResponse)=>{
        console.log(successResponse)
        this.toastr.success('Successfully Added Holidays');

        window.location.reload();
      },((errorResponse)=>{
        this.toastr.error('An error occurred while adding holidays. Please try again later.');

      }))

      
    } else {
      this.holidayForm.markAllAsTouched();
    }
  }

  calculateTotalHolidays(startDate: string, endDate: string): number {
    // Add your logic to calculate the total number of holidays
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = Math.abs(end.getTime() - start.getTime());
    const totalDays = Math.ceil(timeDifference / (1000 * 3600 * 24)) + 1;
    return totalDays;
  }
}
