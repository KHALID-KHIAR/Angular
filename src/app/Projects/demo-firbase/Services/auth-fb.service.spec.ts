import { TestBed } from '@angular/core/testing';

import { AuthFBService } from './auth-fb.service';

describe('AuthFBService', () => {
  let service: AuthFBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
