import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveModuleComponent } from './leave-module.component';

describe('LeaveModuleComponent', () => {
  let component: LeaveModuleComponent;
  let fixture: ComponentFixture<LeaveModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
