import { TestBed } from '@angular/core/testing';

import { TrackAuthService } from './track-auth.service';

describe('TrackAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  }));

  it('should be created', () => {
    const service: TrackAuthService = TestBed.get(TrackAuthService);
    expect(service).toBeTruthy();
  });

  it('should set app as authenticated', () => {
    const service: TrackAuthService = TestBed.get(TrackAuthService);
    service.setAuthentication(true, '');
    expect(service._authenticated).toBeTruthy();
  });

  it('should remove app as authenticated', () => {
    const service: TrackAuthService = TestBed.get(TrackAuthService);
    service.setAuthentication(false);
    expect(service._authenticated).toBeFalsy();
  });

});
