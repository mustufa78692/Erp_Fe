import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesignationFormComponent } from './add-designation-form.component';

describe('AddDesignationFormComponent', () => {
  let component: AddDesignationFormComponent;
  let fixture: ComponentFixture<AddDesignationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDesignationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDesignationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
