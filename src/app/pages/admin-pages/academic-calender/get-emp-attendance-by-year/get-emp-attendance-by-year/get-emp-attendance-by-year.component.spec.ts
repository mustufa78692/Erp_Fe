import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmpAttendanceByYearComponent } from './get-emp-attendance-by-year.component';

describe('GetEmpAttendanceByYearComponent', () => {
  let component: GetEmpAttendanceByYearComponent;
  let fixture: ComponentFixture<GetEmpAttendanceByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEmpAttendanceByYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetEmpAttendanceByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
