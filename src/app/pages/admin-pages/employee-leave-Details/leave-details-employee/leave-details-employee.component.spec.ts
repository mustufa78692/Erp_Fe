import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveDetailsEmployeeComponent } from './leave-details-employee.component';

describe('LeaveDetailsEmployeeComponent', () => {
  let component: LeaveDetailsEmployeeComponent;
  let fixture: ComponentFixture<LeaveDetailsEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveDetailsEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveDetailsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
