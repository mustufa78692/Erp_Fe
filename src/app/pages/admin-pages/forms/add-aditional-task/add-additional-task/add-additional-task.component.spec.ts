import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdditionalTaskComponent } from './add-additional-task.component';

describe('AddAdditionalTaskComponent', () => {
  let component: AddAdditionalTaskComponent;
  let fixture: ComponentFixture<AddAdditionalTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdditionalTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdditionalTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
