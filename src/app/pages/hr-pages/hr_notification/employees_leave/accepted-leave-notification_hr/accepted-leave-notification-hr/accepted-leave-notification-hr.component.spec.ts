import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedLeaveNotificationHrComponent } from './accepted-leave-notification-hr.component';

describe('AcceptedLeaveNotificationHrComponent', () => {
  let component: AcceptedLeaveNotificationHrComponent;
  let fixture: ComponentFixture<AcceptedLeaveNotificationHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedLeaveNotificationHrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedLeaveNotificationHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
