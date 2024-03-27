import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubDutiesComponent } from './add-sub-duties.component';

describe('AddSubDutiesComponent', () => {
  let component: AddSubDutiesComponent;
  let fixture: ComponentFixture<AddSubDutiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubDutiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubDutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
