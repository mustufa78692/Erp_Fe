import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedOvertimeNotificationHrComponent } from './rejected-overtime-notification-hr.component';

describe('RejectedOvertimeNotificationHrComponent', () => {
  let component: RejectedOvertimeNotificationHrComponent;
  let fixture: ComponentFixture<RejectedOvertimeNotificationHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedOvertimeNotificationHrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedOvertimeNotificationHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
