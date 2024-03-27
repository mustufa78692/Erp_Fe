import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondApproverLeaveUpdateFormComponent } from './second-approver-leave-update-form.component';

describe('SecondApproverLeaveUpdateFormComponent', () => {
  let component: SecondApproverLeaveUpdateFormComponent;
  let fixture: ComponentFixture<SecondApproverLeaveUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondApproverLeaveUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondApproverLeaveUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
