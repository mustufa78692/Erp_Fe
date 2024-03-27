import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedBySecondComponent } from './approved-by-second.component';

describe('ApprovedBySecondComponent', () => {
  let component: ApprovedBySecondComponent;
  let fixture: ComponentFixture<ApprovedBySecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedBySecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedBySecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
