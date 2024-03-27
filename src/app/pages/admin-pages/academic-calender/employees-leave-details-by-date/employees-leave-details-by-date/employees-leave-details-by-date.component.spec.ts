import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesLeaveDetailsByDateComponent } from './employees-leave-details-by-date.component';

describe('EmployeesLeaveDetailsByDateComponent', () => {
  let component: EmployeesLeaveDetailsByDateComponent;
  let fixture: ComponentFixture<EmployeesLeaveDetailsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesLeaveDetailsByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesLeaveDetailsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
