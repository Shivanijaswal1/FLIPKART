import { TestBed } from '@angular/core/testing';

import { FlipkartService } from '../../../component/dashboard/flipkart.service';

describe('FlipkartService', () => {
  let service: FlipkartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
