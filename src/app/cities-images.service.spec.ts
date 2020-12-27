import { TestBed } from '@angular/core/testing';

import { CitiesImagesService } from './cities-images.service';

describe('CitiesImagesService', () => {
  let service: CitiesImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitiesImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
