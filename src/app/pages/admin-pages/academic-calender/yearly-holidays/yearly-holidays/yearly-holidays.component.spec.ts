import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyHolidaysComponent } from './yearly-holidays.component';

describe('YearlyHolidaysComponent', () => {
  let component: YearlyHolidaysComponent;
  let fixture: ComponentFixture<YearlyHolidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlyHolidaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearlyHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
