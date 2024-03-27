import { TestBed } from '@angular/core/testing';

import { DynamicRoutesService } from './dynamic-routes.service';

describe('DynamicRoutesService', () => {
  let service: DynamicRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
