import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdditionalTaskbyTaskIdComponent } from './get-additional-taskby-task-id.component';

describe('GetAdditionalTaskbyTaskIdComponent', () => {
  let component: GetAdditionalTaskbyTaskIdComponent;
  let fixture: ComponentFixture<GetAdditionalTaskbyTaskIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAdditionalTaskbyTaskIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAdditionalTaskbyTaskIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
