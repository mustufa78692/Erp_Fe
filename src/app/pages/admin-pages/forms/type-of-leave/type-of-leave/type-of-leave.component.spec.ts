import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfLeaveComponent } from './type-of-leave.component';

describe('TypeOfLeaveComponent', () => {
  let component: TypeOfLeaveComponent;
  let fixture: ComponentFixture<TypeOfLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOfLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeOfLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
