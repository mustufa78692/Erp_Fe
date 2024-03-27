import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubDutyComponent } from './update-sub-duty.component';

describe('UpdateSubDutyComponent', () => {
  let component: UpdateSubDutyComponent;
  let fixture: ComponentFixture<UpdateSubDutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSubDutyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSubDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
