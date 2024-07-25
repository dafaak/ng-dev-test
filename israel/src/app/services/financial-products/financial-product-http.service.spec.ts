import { TestBed } from '@angular/core/testing';

import { FinancialProductHttpService } from './financial-product-http.service';

describe('FinancialProductHttpService', () => {
  let service: FinancialProductHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialProductHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
