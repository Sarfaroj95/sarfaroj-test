import { TestBed } from '@angular/core/testing';

import { ManuServiceService } from './manu-service.service';

describe('ManuServiceService', () => {
  let service: ManuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
