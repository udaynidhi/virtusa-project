import { TestBed } from '@angular/core/testing';

import { CoursetestService } from './coursetest.service';

describe('CoursetestService', () => {
  let service: CoursetestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursetestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
