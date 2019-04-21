import { TestBed, async, inject } from '@angular/core/testing';

import { CheckAuthGuard } from './check-auth.guard';
import { TrackAuthService } from '../track-auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';

const trackAuthStub = {
  setAuthentication: jasmine.createSpy('setAuthentication')
}

describe('CheckAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckAuthGuard,
      {
        provide: TrackAuthService, useValue: trackAuthStub
      },
    {
      provide: Router,
      useClass: class { navigate = jasmine.createSpy('navigateByUrl'); }
    }]
    });
  });

  it('should ...', inject([CheckAuthGuard], (guard: CheckAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
