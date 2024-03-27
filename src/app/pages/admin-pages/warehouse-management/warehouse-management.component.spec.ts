import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseManagementComponent } from './warehouse-management.component';

describe('WarehouseManagementComponent', () => {
  let component: WarehouseManagementComponent;
  let fixture: ComponentFixture<WarehouseManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
