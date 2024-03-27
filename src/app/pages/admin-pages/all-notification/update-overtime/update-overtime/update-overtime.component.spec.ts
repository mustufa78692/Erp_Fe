import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOvertimeComponent } from './update-overtime.component';

describe('UpdateOvertimeComponent', () => {
  let component: UpdateOvertimeComponent;
  let fixture: ComponentFixture<UpdateOvertimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOvertimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOvertimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
