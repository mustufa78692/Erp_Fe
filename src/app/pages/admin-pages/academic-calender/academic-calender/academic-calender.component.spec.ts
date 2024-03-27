import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicCalenderComponent } from './academic-calender.component';

describe('AcademicCalenderComponent', () => {
  let component: AcademicCalenderComponent;
  let fixture: ComponentFixture<AcademicCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicCalenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
