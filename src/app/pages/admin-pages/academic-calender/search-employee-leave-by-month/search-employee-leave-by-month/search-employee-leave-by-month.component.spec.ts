import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployeeLeaveByMonthComponent } from './search-employee-leave-by-month.component';

describe('SearchEmployeeLeaveByMonthComponent', () => {
  let component: SearchEmployeeLeaveByMonthComponent;
  let fixture: ComponentFixture<SearchEmployeeLeaveByMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEmployeeLeaveByMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEmployeeLeaveByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
