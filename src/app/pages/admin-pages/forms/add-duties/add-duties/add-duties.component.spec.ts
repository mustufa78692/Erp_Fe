import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDutiesComponent } from './add-duties.component';

describe('AddDutiesComponent', () => {
  let component: AddDutiesComponent;
  let fixture: ComponentFixture<AddDutiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDutiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
