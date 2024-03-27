import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingOvertimeNotificationHrComponent } from './pending-overtime-notification-hr.component';

describe('PendingOvertimeNotificationHrComponent', () => {
  let component: PendingOvertimeNotificationHrComponent;
  let fixture: ComponentFixture<PendingOvertimeNotificationHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingOvertimeNotificationHrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingOvertimeNotificationHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
