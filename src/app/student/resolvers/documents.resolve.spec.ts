import { TestBed } from '@angular/core/testing';

import { DocumentsResolver } from './documents.resolve';

describe('DocumentsResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentsResolver = TestBed.get(DocumentsResolver);
    expect(service).toBeTruthy();
  });
});
