import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToFillComponent } from './form-to-fill.component';

describe('FormToFillComponent', () => {
  let component: FormToFillComponent;
  let fixture: ComponentFixture<FormToFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormToFillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormToFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
