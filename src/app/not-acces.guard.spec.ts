import { TestBed } from '@angular/core/testing';

import { NotAccesGuard } from './not-acces.guard';

describe('NotAccesGuard', () => {
  let guard: NotAccesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotAccesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
