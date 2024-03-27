import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalleaveformComponent } from './approvalleaveform.component';

describe('ApprovalleaveformComponent', () => {
  let component: ApprovalleaveformComponent;
  let fixture: ComponentFixture<ApprovalleaveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalleaveformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalleaveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
