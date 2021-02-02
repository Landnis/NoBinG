import { TestBed } from '@angular/core/testing';

import { ReservedApiService } from './reserved-api.service';

describe('ReservedApiService', () => {
  let service: ReservedApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservedApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
