import { TestBed } from '@angular/core/testing';

import { UseraccountsService } from './useraccounts.service';

describe('UseraccountsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseraccountsService = TestBed.get(UseraccountsService);
    expect(service).toBeTruthy();
  });
});
