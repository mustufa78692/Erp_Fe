import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Country, State, City } from 'country-state-city';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-yearly-holidays',
  templateUrl: './yearly-holidays.component.html',
  styleUrls: ['./yearly-holidays.component.scss']
})
export class YearlyHolidaysComponent implements OnInit {

  form: FormGroup;
  years: number[] = [];
  public countries: any[] = []
  // years = [2020, 2021, 2022, 2023, 2024]; // Example years
  // countries = ['India', 'USA', 'Germany', 'Australia']; // Example countries
  holidays :any;
  page = 1;
  pageSize = 5;
  constructor(private fb: FormBuilder ,private api:ServicesService,private toastr: ToastrService) {
    this.form = this.fb.group({
      year: [''],
      country: ['']
    });
  }
  ngOnInit(): void {

    const currentYear = new Date().getFullYear();
    for (let i = 1970; i <= currentYear; i++) {
      this.years.push(i);
    }

    this.countries = Country.getAllCountries()
    console.log(this.countries)


  }

  onSubmit() {
    console.log(this.form.value);
    let year=this.form.value.year
    let country = this.form.value.country

    this.api.getAllHolidaysByYearCountry(year, country).subscribe((successResponse)=>{
      console.log(successResponse)
      this.holidays = successResponse
      this.toastr.info("Holidays successfully fetched.")

    },(errorResponse)=>{
      this.toastr.error("Something went wrong! There is a problem retrieving the data.")

    })

  }

}
