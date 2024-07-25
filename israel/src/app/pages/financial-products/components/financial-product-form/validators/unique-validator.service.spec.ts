import { TestBed } from '@angular/core/testing';

import { UniqueValidatorService } from './unique-validator.service';
import { HttpClientTestingModule, provideHttpClientTesting } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";

describe('UniqueValidatorService', () => {
  let service: UniqueValidatorService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideHttpClientTesting(),]
    });
    service = TestBed.inject(UniqueValidatorService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
