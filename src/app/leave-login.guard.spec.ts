import { TestBed } from '@angular/core/testing';

import { LeaveLoginGuard } from './leave-login.guard';

describe('LeaveLoginGuard', () => {
  let guard: LeaveLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeaveLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
