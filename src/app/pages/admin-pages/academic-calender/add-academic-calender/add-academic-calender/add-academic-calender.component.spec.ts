import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcademicCalenderComponent } from './add-academic-calender.component';

describe('AddAcademicCalenderComponent', () => {
  let component: AddAcademicCalenderComponent;
  let fixture: ComponentFixture<AddAcademicCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAcademicCalenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAcademicCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
