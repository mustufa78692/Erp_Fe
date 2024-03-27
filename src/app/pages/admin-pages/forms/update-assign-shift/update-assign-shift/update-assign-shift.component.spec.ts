import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssignShiftComponent } from './update-assign-shift.component';

describe('UpdateAssignShiftComponent', () => {
  let component: UpdateAssignShiftComponent;
  let fixture: ComponentFixture<UpdateAssignShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAssignShiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAssignShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
