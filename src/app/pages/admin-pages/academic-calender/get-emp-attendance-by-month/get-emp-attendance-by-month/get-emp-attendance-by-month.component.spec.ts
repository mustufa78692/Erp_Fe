import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmpAttendanceByMonthComponent } from './get-emp-attendance-by-month.component';

describe('GetEmpAttendanceByMonthComponent', () => {
  let component: GetEmpAttendanceByMonthComponent;
  let fixture: ComponentFixture<GetEmpAttendanceByMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEmpAttendanceByMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetEmpAttendanceByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
