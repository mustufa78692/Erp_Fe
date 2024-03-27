import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTypeFormComponent } from './level-type-form.component';

describe('LevelTypeFormComponent', () => {
  let component: LevelTypeFormComponent;
  let fixture: ComponentFixture<LevelTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
