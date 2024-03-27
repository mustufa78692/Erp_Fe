import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimeNotificationComponent } from './overtime-notification.component';

describe('OvertimeNotificationComponent', () => {
  let component: OvertimeNotificationComponent;
  let fixture: ComponentFixture<OvertimeNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvertimeNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvertimeNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
