import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLeaveNotificationHrComponent } from './all-leave-notification-hr.component';

describe('AllLeaveNotificationHrComponent', () => {
  let component: AllLeaveNotificationHrComponent;
  let fixture: ComponentFixture<AllLeaveNotificationHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLeaveNotificationHrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLeaveNotificationHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
