import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrNotificationComponent } from './hr-notification.component';

describe('HrNotificationComponent', () => {
  let component: HrNotificationComponent;
  let fixture: ComponentFixture<HrNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
