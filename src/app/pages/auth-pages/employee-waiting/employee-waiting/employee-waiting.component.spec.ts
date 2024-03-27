import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWaitingComponent } from './employee-waiting.component';

describe('EmployeeWaitingComponent', () => {
  let component: EmployeeWaitingComponent;
  let fixture: ComponentFixture<EmployeeWaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeWaitingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
