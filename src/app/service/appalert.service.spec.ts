import { TestBed } from '@angular/core/testing';

import { AppalertService } from './appalert.service';

describe('AppalertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppalertService = TestBed.get(AppalertService);
    expect(service).toBeTruthy();
  });
});
