import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingLeaveNotificationHrComponent } from './pending-leave-notification-hr.component';

describe('PendingLeaveNotificationHrComponent', () => {
  let component: PendingLeaveNotificationHrComponent;
  let fixture: ComponentFixture<PendingLeaveNotificationHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingLeaveNotificationHrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingLeaveNotificationHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
