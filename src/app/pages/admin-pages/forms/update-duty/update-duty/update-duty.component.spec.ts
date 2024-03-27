import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDutyComponent } from './update-duty.component';

describe('UpdateDutyComponent', () => {
  let component: UpdateDutyComponent;
  let fixture: ComponentFixture<UpdateDutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDutyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
