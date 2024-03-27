import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedOvertimeNotificationHrComponent } from './accepted-overtime-notification-hr.component';

describe('AcceptedOvertimeNotificationHrComponent', () => {
  let component: AcceptedOvertimeNotificationHrComponent;
  let fixture: ComponentFixture<AcceptedOvertimeNotificationHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedOvertimeNotificationHrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedOvertimeNotificationHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
