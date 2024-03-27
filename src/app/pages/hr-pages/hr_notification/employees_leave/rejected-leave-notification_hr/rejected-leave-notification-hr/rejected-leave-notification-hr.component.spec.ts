import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedLeaveNotificationHrComponent } from './rejected-leave-notification-hr.component';

describe('RejectedLeaveNotificationHrComponent', () => {
  let component: RejectedLeaveNotificationHrComponent;
  let fixture: ComponentFixture<RejectedLeaveNotificationHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedLeaveNotificationHrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedLeaveNotificationHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
