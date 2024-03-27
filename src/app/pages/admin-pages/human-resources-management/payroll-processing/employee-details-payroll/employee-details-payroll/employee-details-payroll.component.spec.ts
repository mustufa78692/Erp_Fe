import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsPayrollComponent } from './employee-details-payroll.component';

describe('EmployeeDetailsPayrollComponent', () => {
  let component: EmployeeDetailsPayrollComponent;
  let fixture: ComponentFixture<EmployeeDetailsPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsPayrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetailsPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
