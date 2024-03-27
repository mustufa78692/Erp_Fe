import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLeaveMonitoringComponent } from './staff-leave-monitoring.component';

describe('StaffLeaveMonitoringComponent', () => {
  let component: StaffLeaveMonitoringComponent;
  let fixture: ComponentFixture<StaffLeaveMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffLeaveMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffLeaveMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
