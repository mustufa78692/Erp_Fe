import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedByFirstComponent } from './approved-by-first.component';

describe('ApprovedByFirstComponent', () => {
  let component: ApprovedByFirstComponent;
  let fixture: ComponentFixture<ApprovedByFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedByFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedByFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
