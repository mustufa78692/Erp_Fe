import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApproverComponent } from './leave-approver.component';

describe('LeaveApproverComponent', () => {
  let component: LeaveApproverComponent;
  let fixture: ComponentFixture<LeaveApproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveApproverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
