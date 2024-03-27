import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanDasboardComponent } from './comman-dasboard.component';

describe('CommanDasboardComponent', () => {
  let component: CommanDasboardComponent;
  let fixture: ComponentFixture<CommanDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommanDasboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommanDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
