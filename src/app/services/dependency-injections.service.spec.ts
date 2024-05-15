import { TestBed } from '@angular/core/testing';

import { DependencyInjectionsService } from './dependency-injections.service';

describe('DependencyInjectionsService', () => {
  let service: DependencyInjectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependencyInjectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
