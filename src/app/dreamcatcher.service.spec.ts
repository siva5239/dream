import { TestBed } from '@angular/core/testing';

import { DreamcatcherService } from './dreamcatcher.service';

describe('DreamcatcherService', () => {
  let service: DreamcatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DreamcatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
