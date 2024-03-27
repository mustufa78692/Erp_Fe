import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeeForshiftAssignComponent } from './all-employee-forshift-assign.component';

describe('AllEmployeeForshiftAssignComponent', () => {
  let component: AllEmployeeForshiftAssignComponent;
  let fixture: ComponentFixture<AllEmployeeForshiftAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmployeeForshiftAssignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEmployeeForshiftAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
