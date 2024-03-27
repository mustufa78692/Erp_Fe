import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOvertimeNotificationHrComponent } from './all-overtime-notification-hr.component';

describe('AllOvertimeNotificationHrComponent', () => {
  let component: AllOvertimeNotificationHrComponent;
  let fixture: ComponentFixture<AllOvertimeNotificationHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOvertimeNotificationHrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOvertimeNotificationHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
