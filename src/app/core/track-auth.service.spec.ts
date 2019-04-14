import { TestBed } from '@angular/core/testing';

import { TrackAuthService } from './track-auth.service';

describe('TrackAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackAuthService = TestBed.get(TrackAuthService);
    expect(service).toBeTruthy();
  });
});
