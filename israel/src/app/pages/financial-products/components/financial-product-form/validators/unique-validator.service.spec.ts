import { TestBed } from '@angular/core/testing';

import { UniqueValidatorService } from './unique-validator.service';

describe('UniqueValidatorService', () => {
  let service: UniqueValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
