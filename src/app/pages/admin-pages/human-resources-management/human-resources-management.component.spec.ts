import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourcesManagementComponent } from './human-resources-management.component';

describe('HumanResourcesManagementComponent', () => {
  let component: HumanResourcesManagementComponent;
  let fixture: ComponentFixture<HumanResourcesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanResourcesManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanResourcesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
