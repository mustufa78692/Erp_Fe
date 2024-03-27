import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeaveApproverComponent } from './update-leave-approver.component';

describe('UpdateLeaveApproverComponent', () => {
  let component: UpdateLeaveApproverComponent;
  let fixture: ComponentFixture<UpdateLeaveApproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLeaveApproverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLeaveApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
