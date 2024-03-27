import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveCalenderComponent } from './leave-calender.component';

describe('LeaveCalenderComponent', () => {
  let component: LeaveCalenderComponent;
  let fixture: ComponentFixture<LeaveCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveCalenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
