import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAttendanceComponent } from './time-attendance.component';

describe('TimeAttendanceComponent', () => {
  let component: TimeAttendanceComponent;
  let fixture: ComponentFixture<TimeAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeAttendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
