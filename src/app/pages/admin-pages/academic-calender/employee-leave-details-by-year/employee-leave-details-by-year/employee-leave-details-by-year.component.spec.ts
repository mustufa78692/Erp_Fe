import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveDetailsByYearComponent } from './employee-leave-details-by-year.component';

describe('EmployeeLeaveDetailsByYearComponent', () => {
  let component: EmployeeLeaveDetailsByYearComponent;
  let fixture: ComponentFixture<EmployeeLeaveDetailsByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLeaveDetailsByYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLeaveDetailsByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
