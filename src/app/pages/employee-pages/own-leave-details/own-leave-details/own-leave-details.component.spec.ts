import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnLeaveDetailsComponent } from './own-leave-details.component';

describe('OwnLeaveDetailsComponent', () => {
  let component: OwnLeaveDetailsComponent;
  let fixture: ComponentFixture<OwnLeaveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnLeaveDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnLeaveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
