import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warehouse2Component } from './warehouse2.component';

describe('Warehouse2Component', () => {
  let component: Warehouse2Component;
  let fixture: ComponentFixture<Warehouse2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Warehouse2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Warehouse2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
