import { TestBed } from '@angular/core/testing';

import { DetailingHistoryService } from './detailing-history.service';

describe('DetailingHistoryService', () => {
  let service: DetailingHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailingHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
