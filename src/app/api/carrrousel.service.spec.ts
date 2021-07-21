import { TestBed } from '@angular/core/testing';

import { CarrrouselService } from './carrrousel.service';

describe('CarrrouselService', () => {
  let service: CarrrouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrrouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
