import { TestBed } from '@angular/core/testing';

import { AutenticateService } from '../autenticate/autenticate.service';

describe('AutenticateService', () => {
  let service: AutenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
