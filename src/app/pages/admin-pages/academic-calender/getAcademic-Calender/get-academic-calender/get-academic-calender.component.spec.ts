import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAcademicCalenderComponent } from './get-academic-calender.component';

describe('GetAcademicCalenderComponent', () => {
  let component: GetAcademicCalenderComponent;
  let fixture: ComponentFixture<GetAcademicCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAcademicCalenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAcademicCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
