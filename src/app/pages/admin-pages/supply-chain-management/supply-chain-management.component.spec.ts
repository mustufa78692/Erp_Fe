import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyChainManagementComponent } from './supply-chain-management.component';

describe('SupplyChainManagementComponent', () => {
  let component: SupplyChainManagementComponent;
  let fixture: ComponentFixture<SupplyChainManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyChainManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplyChainManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
