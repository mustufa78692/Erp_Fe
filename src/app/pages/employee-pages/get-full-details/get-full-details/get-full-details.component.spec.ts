import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFullDetailsComponent } from './get-full-details.component';

describe('GetFullDetailsComponent', () => {
  let component: GetFullDetailsComponent;
  let fixture: ComponentFixture<GetFullDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFullDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
