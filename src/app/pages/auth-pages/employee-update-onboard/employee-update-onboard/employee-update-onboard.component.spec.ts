import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdateOnboardComponent } from './employee-update-onboard.component';

describe('EmployeeUpdateOnboardComponent', () => {
  let component: EmployeeUpdateOnboardComponent;
  let fixture: ComponentFixture<EmployeeUpdateOnboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUpdateOnboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeUpdateOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
