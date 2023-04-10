import { TestBed } from '@angular/core/testing';

import { AutenticateGuard } from './autenticate.guard';

describe('AutenticateGuard', () => {
  let guard: AutenticateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenticateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
