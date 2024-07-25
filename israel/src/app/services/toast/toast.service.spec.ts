import { TestBed } from '@angular/core/testing';

import { ToatService } from './toast.service';

describe('ToatService', () => {
  let service: ToatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
