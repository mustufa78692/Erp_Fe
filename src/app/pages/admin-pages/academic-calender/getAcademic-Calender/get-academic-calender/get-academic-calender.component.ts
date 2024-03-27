// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-academic-calender',
  templateUrl: './get-academic-calender.component.html',
  styleUrls: ['./get-academic-calender.component.scss']
})
export class GetAcademicCalenderComponent implements OnInit {

  calendar!: Calendar;
  holidayTitle: string = '';
  holidayDate: string = '';
  holidayEndDate: string = '';
  numberOfDays: number = 0;
  selectedHoliday: any = null;
  isUpdating: boolean = false;

  constructor(private e1: ElementRef, private http: HttpClient) {}

  ngAfterViewInit() {
    this.initializeCalendar();
  }

  ngOnInit(): void {
    this.initializeCalendar();
  }

  initializeCalendar() {
    const calendarE1: HTMLElement = this.e1.nativeElement.querySelector('#calendar');
    this.http.get<any[]>('http://localhost:5000/holidays').subscribe((holidays: any[]) => {
      const holidayEvents = holidays.map((holiday: any) => ({
        title: holiday.title,
        start: holiday.startDate,
        end: holiday.endDate,
        height: '500px',
        extendedProps: {
          id: holiday.id
        }
      }));
      const calendarOptions: CalendarOptions = {
        plugins: [interactionPlugin,
          dayGridPlugin],
        initialView: 'dayGridMonth',
        editable: true,
        selectable: true,
        eventClick: this.handleEventClick.bind(this),
        events: holidayEvents,
      };

      this.calendar = new Calendar(calendarE1, calendarOptions);
      this.calendar.render();
      this.calendarEl.style.height = '500px';
      this.calendarEl.style.padding = 'auto';
    });
  }

  handleEventClick(info: { event: any }) {
    this.selectedHoliday = info.event;
    this.populateFormForEdit();
    this.isUpdating = true;
  }

  populateFormForEdit() {
    this.holidayTitle = this.selectedHoliday.title;
    this.holidayDate = this.selectedHoliday.start.toISOString().split('T')[0];
    this.holidayEndDate = this.selectedHoliday.end.toISOString().split('T')[0];
    this.updateNumberOfDays();
  }

  get calendarEl(): HTMLElement {
    return this.e1.nativeElement.querySelector('#calendar');
  }

  updateNumberOfDays() {
    if (this.holidayDate && this.holidayEndDate) {
      const startDate = new Date(this.holidayDate);
      const endDate = new Date(this.holidayEndDate);
      const timeDifference = endDate.getTime() - startDate.getTime();
      this.numberOfDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    } else {
      this.numberOfDays = 0;
    }
  }

}
