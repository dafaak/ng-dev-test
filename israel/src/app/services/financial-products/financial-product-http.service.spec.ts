import { TestBed } from '@angular/core/testing';

import { FinancialProductHttpService } from './financial-product-http.service';
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import spyOn = jest.spyOn;

describe('FinancialProductHttpService', () => {
  let service: FinancialProductHttpService;
  let httpController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[FinancialProductHttpService,provideHttpClientTesting(),]
    });
    service = TestBed.inject(FinancialProductHttpService);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get api', () => {
      const spy = spyOn(service, 'getFinancialProducts');
      service.getFinancialProducts();
      expect(spy).toHaveBeenCalled();
    }
  );


});
