import { TestBed } from '@angular/core/testing';

import { FirebaseCloudstoreService } from './firebase-cloudstore.service';

describe('FirebaseCloudstoreService', () => {
  let service: FirebaseCloudstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseCloudstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
