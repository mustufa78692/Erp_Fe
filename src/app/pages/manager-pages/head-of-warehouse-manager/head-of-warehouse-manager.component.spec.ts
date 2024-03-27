import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfWarehouseManagerComponent } from './head-of-warehouse-manager.component';

describe('HeadOfWarehouseManagerComponent', () => {
  let component: HeadOfWarehouseManagerComponent;
  let fixture: ComponentFixture<HeadOfWarehouseManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadOfWarehouseManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadOfWarehouseManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
