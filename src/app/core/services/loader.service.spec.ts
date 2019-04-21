import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaderService = TestBed.get(LoaderService);
    expect(service).toBeTruthy();
  });

  it('should be show loader', () => {
    const service: LoaderService = TestBed.get(LoaderService);
    service.show();
    expect(service.isLoaderShown).toBeTruthy();
  });

  it('should be hide loader', () => {
    const service: LoaderService = TestBed.get(LoaderService);
    service.hide();
    expect(service.isLoaderShown).toBeFalsy();
  });
});
