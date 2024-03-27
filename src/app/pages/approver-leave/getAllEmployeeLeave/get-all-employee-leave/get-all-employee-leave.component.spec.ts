import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllEmployeeLeaveComponent } from './get-all-employee-leave.component';

describe('GetAllEmployeeLeaveComponent', () => {
  let component: GetAllEmployeeLeaveComponent;
  let fixture: ComponentFixture<GetAllEmployeeLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllEmployeeLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllEmployeeLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
