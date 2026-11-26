import { TestBed } from '@angular/core/testing';

import { Advent } from './advent';

describe('Advent', () => {
  let service: Advent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Advent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
